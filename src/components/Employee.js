const Employee = ()=>{
    return(
        <>
        <div >
            <div className=" ml-96 flex mt-32 h-36  ">
        <div className=" bg-slate-400 w-56 p-20 m-5 rounded-lg"></div>
        <div className=" bg-slate-400 w-56 p-20 m-5 rounded-lg"></div>
        <div className=" bg-slate-400 w-56 p-20 m-5 rounded-lg"></div>
        <div className=" bg-slate-400 w-56 p-20 m-5 rounded-lg"></div>
        </div>
            <div className="shadow-xl mt-24 rounded-xl w-[50rem] ml-96 h-96 p-10 m-10  bg-slate-400">
                <h1>employee</h1>
            </div>
            <div className="shadow-xl  rounded-xl w-[50rem] ml-96 h-96 p-10 m-10 bg-slate-400  ">
                <h1>start/end time</h1>
                <div className="flex">
                <div className="flex-col ">
                    <input className="rounded-xl p-5 m-4 "placeholder="start"></input>
                    <input className="rounded-xl p-5 m-4 "placeholder=""></input>
                </div>
                <div className="flex-col ">
                    <input className="rounded-xl p-5 m-4 " placeholder="end"></input>
                    <input className="rounded-xl p-5 m-4 "placeholder="comment"></input>

                </div> 
                
                </div>
                <button className="bg-white p-4 m-4 hover:bg-blue-950 ml-64 rounded-xl">Start/end</button>
                </div>
                <div className="shadow-xl  rounded-xl w-[50rem] ml-96 h-96 p-10 m-10 bg-slate-400">
                    <h1>All task</h1>
                    <div className="bg-white w-[45rem] h-14 rounded-xl p-4 m-2"></div>
            </div>
        </div>
        
        
        
        </>
    )
}
export default Employee;