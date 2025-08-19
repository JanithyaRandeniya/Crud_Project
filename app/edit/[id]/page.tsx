export default function EditPage() {
  return ( 
    <div>
      <h2 className="text-2xl font-bold my-8">Edit The Details</h2>

      <form className="flex gap-3 flex-col">
        <input 
          type="text" 
          name="productName" 
          placeholder="Product Name" 
          className="py-1 px-4 border rounded-md"
        />
        
        <textarea 
          name="description" 
          rows={4}
          placeholder="Description" 
          className="py-1 px-4 border rounded-md resize-none"
        />

        <button 
          type="submit"
          className="bg-fuchsia-800 text-white mt-5 px-4 py-1 rounded-md cursor-pointer"
        >
          Update Products Now
        </button>
      </form>
    </div>
  );
}
