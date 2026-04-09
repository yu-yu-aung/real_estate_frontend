


const Page = async ({params} : { params: Promise<{ id: string }>}) => { 
  
  const {id} = await params;  

  return (
    <div>This is property detail page for the id {id}</div>
  )
}

export default Page