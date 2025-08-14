export default function CreatePage(){
    return(
        <div>
            <h2 className="text-2xl font-bold my-8"> Add New Product To List </h2>


            <form className="flex gap-3 flex-col">
                <input 
                type="text" name="Product Name" placeholder="Product Name" className="py-1 px-4 border rounded-md"/>
            
            <textarea name="Description" rows={4}
             placeholder="Description" className="py-1 px-4 border rounded-md resize-none ">
            </textarea>
            
            <button className="bg-fuchsia-800 text-white mt-5 px-4 py-1 
             rounded-md cursor-pointer"> Add Products Now </button>
            </form>
        </div>
    )
}