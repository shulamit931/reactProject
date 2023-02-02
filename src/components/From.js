import { useForm } from 'react-hook-form';

export default function Form() {
    const { register, handleSubmit, watch, formState: { errors,touchedFields } } = useForm();
    const onSubmit = data => console.log(data);

    //console.log(watch("first_name"),watch("last_name")); // watch input value by passing the name of it

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)} className="row g-3 needs-validation" noValidate>
            {/* register your input into the hook by invoking the "register" function */}
            <div className="col-md-4" >
                <label className="form-label">first name</label>
                <input  {...register("first_name", { required: true, maxLength: 20 })}/><br />
               {errors.first_name&&<p className="text-danger">firs name is required</p>}
            </div>

            <div className="col-md-4">
                <label className="form-label">last name</label>
                <input {...register("last_name")} /><br />
               
            </div>

            <div className="col-md-4">
                <label className="form-label">phone</label>
                <input  {...register("phone", { pattern: /^[0-9]+$/ })} /><br />
                    {errors.phone && <span className="text-danger">phone can be only numbers</span>}<br />
           </div>

            <div className="col-md-4">
                <label className="form-label">adress</label>
                <input  {...register("adress",{required:true})} /><br />
                {errors.adress&&<span className="text-danger">adress is required</span>}
            </div>

            <div className="col-md-4">
                <label className="form-label">mail</label>
                <input type="email" {...register("mail",{pattern:/\S+@\S+\.\S+/})} /><br />
                {errors.mail && <span className="text-danger"> invalid mail adress</span>}<br />
            </div>
            {/* include validation with required or other standard HTML validation rules */}

            {/* errors will return when field validation fails  */}
            

           
           <button className="btn btn-primary" type="submit">Submit form</button>
        </form>
            );
}