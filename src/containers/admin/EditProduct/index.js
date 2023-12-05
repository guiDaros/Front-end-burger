import React, { useEffect, useState } from "react";

import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useHistory } from "react-router-dom";
import { 
    Container, 
    Label, 
    Input, 
    ButtonStyles, 
    LabelUpload, 
    ContainerInput,
    ExcludeProductBtn
} from './styles'
import api from '../../../services/api'
import ReactSelect from "react-select";
import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { ErrorMessage } from "../../../components";
import { toast } from "react-toastify";


export function EditProduct() {
    const [fileName, setFileName] = useState(null)
    const [categories, setCategories] = useState([])
    const { push, location: { state: { product } } } = useHistory()

    const schema = Yup.object({
        name: Yup.string().required('Digite o nome do produto'),
        price: Yup.string().required('Digite o preco do produto'),
        category: Yup.object().shape({
            id: Yup.string().required('Selecione uma categoria')
        }),
        offer: Yup.bool()
    })

    const {
        register,
        handleSubmit,
        control,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = async data => {
        const productDataFormData = new FormData()

        productDataFormData.append('name', data.name)
        productDataFormData.append('price', data.price)
        productDataFormData.append('category_id', data.category.id)
        productDataFormData.append('file', data.file[0])
        productDataFormData.append('offer', data.offer)

        await toast.promise(api.put(`products/${product.id}`, productDataFormData), {
            pending: 'Editando o produto...',
            success: 'Produto editado com sucesso',
            error: 'Falha ao editar o produto'
        })

        setTimeout(() => {
            push('/listar-produtos')
        }, 2000);
    }

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories')

            setCategories(data)
        }
        loadCategories()
    }, [])


    async function deleteProduct(productId) {
        try {
          await toast.promise(api.delete(`products/${productId}`), {
            pending: 'Excluindo o produto...',
            success: 'Produto excluído com sucesso',
            error: 'Falha ao excluir o produto'
          });
      
          // Após a exclusão bem-sucedida, redirecione para a página de listagem de produtos
          push('/listar-produtos');
        } catch (error) {
          console.error('Erro ao excluir o produto:', error);
          toast.error('Erro ao excluir o produto');
        }
      }
      
      function confirmDelete(productId) {
        const confirmation = window.confirm("Tem certeza que deseja excluir este produto?");
        
        if (confirmation) {
          deleteProduct(productId);
        } else {
          console.log("Exclusão cancelada pelo usuário.");
        }
      }
      
      

    return (
        <Container>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Label>Nome</Label>
                    <Input type="text" {...register('name')} defaultValue={product.name}/>
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>
                </div>

                <div>
                    <Label>Preco</Label>
                    <Input type="number" {...register('price')} defaultValue={product.price}/>
                    <ErrorMessage>{errors.price?.message}</ErrorMessage>
                </div>

                <div>
                    <LabelUpload>
                        {fileName ? fileName : (
                            <>
                                <CloudUploadIcon />
                                Carregue a imagem do Produto
                            </>

                        )
                        }
                        <input
                            type="file"
                            accept="image/png, image/jpeg"
                            {...register('file')}
                            onChange={value => {
                                setFileName(value.target.files[0]?.name)
                            }}
                        />
                    </LabelUpload>
                    <ErrorMessage>{errors.file?.message}</ErrorMessage>
                </div>

                <div>
                    <Controller
                        name="category"
                        control={control}
                        defaultValue={product.category}
                        render={({ field }) => {
                            return (
                                <ReactSelect
                                    {...field}
                                    options={categories}
                                    getOptionLabel={cat => cat.name}
                                    getOptionValue={cat => cat.id}
                                    placeholder="Categorias"
                                    defaultValue={product.category}
                                />
                            )
                        }}
                    >

                    </Controller>
                    <ErrorMessage>{errors.category?.message}</ErrorMessage>
                </div>

                <ContainerInput>  
                <input type="checkbox" {...register('offer')} defaultChecked={product.offer}/>

                <Label>Produto em oferta? </Label>
                </ContainerInput>      

                <ExcludeProductBtn onClick={() => confirmDelete(product.id)}>
                    <DeleteForeverIcon style={{width: '30px', height:'30px', color: '#ffffff',}} />
                    <Label style={{fontSize: '15px'}}>Excluir produto</Label>
                </ExcludeProductBtn>

                <ButtonStyles>Editar Produtos</ButtonStyles>
            </form>
        </Container>
    )
}

export default EditProduct