const Contact = ()=>{
    return (
      <div>
        <h1 className="font bold text-2xl m-4 p-4">Contact us page</h1>
        <form>
          <input placeholder="name" className="border border-black p-2 m-2" />
          <input placeholder="message" className="border border-black p-2 m-2" />
          <button className="border border-black p-2 m-2 bg-amber-200 rounded-xl">Submit</button>
        </form>
      </div>
    );
}

export default Contact;