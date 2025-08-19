export default function Home() { 
  
  return (
    <div>
      <div className="p-4 my-2 rounded-md border-b leading-9">
        <div className="font-bold">Gents Watch</div>
        <div>
          Elegant and timeless, this black watch features a minimalist design
          that complements any outfit. Crafted with a durable strap and a clear
          dial, it is perfect for both casual and formal wear. A versatile
          accessory for everyday sophistication.
        </div>

        <div className="flex gap-4 mt-4 justify-end">
          <a
            className="bg-slate-200 px-3 py-2 rounded-md uppercase text-sm font-bold tracking-widest"
            href="/edit"
          >
            Edit
          </a>

          <button className="bg-red-500 text-white px-3 py-2 rounded-md uppercase text-sm font-bold tracking-widest">
            Delete
          </button>

        </div>
      </div>
    </div>
  );
}
