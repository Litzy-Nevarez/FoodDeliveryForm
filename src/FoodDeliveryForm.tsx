import { useForm } from "react-hook-form"

type FoodDeliveryForm = {
    customerName : string,
    mobile: string,
}

export const FoodDeliveryForm = () => {

    const { register, handleSubmit } = useForm<FoodDeliveryForm>();

    const onSubmit = (formData:FoodDeliveryForm) => {
        console.log('form data', formData);
    }

    return (
        <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-floating mb-3">
                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Customer name"
                    {...register('customerName', {value:'Litzy'})}
                />
                <label>Customer Name</label>
            </div>
            <div className="form-floating mb-3">
                <input 
                    type="number"
                    className="form-control"
                    placeholder="Mobile"
                    {...register('mobile')}
                />
                <label>Mobile</label>
            </div>
            
            <button type="submit" className="btn btn-primary">Send</button>
        </form>
    )
}
