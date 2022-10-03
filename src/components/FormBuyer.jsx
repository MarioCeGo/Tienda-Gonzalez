const FormBuyer = ({form, setForm}) =>{
    
    const formChange = (e) =>{
        const aux = {...form, [e.target.name]: e.target.value}
        setForm(aux);
    }
    return(
        <>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="" onChange={formChange}/>
            </div>
            <div>
                <label htmlFor="lastName">Last name:</label>
                <input type="text" name="lastName" id="" onChange={formChange}/>
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="" onChange={formChange}/>
            </div>
            <div>
                <label htmlFor="phone">Phone:</label>
                <input type="number" name="phone" id="" onChange={formChange}/>
            </div>
        </>
    )
}

export default FormBuyer