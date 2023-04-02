import Image from 'next/image';

function MemberBox(props) {
    
    return (
        <div className="grid items-center content-center justify-items-center gap-6 w-60 h-60 p-4 m-4 
        hover:w-64 hover:h-64 ease-in duration-100 
        bg-slate-200 shadow-md rounded-sm">
            <div className="relative rounded-full bg-slate-400 w-20 h-20 md:h-15 overflow-hidden">
                <Image
                src="/images/members/avatar.png"
                alt="contact image"
                className="relative object-contain w-1"
                fill
                />
            </div>
            <div className="grid justify-items-center w-full h-20">
                <h1>{props.data.name}</h1>
                <h1 className="text-slate-500">{props.data.role}</h1>
                <a href={props.data.linkedin} className="text-sky-800 hover:text-sky-600">Linkedin</a>
            </div>
        </div>
    )
}

export type MemberData = {
    name: string;
    role: string;
    avatarUrl: string;
    linkedin: string;
}

const Members2 = () => {
    const membersList: Array<MemberData> = [];

    for (let i=0; i<5; i++) {
        membersList.push({
            name: 'Pedro Vinicius',
            role: 'Developer',
            avatar_url: "../../../public/images/members/avatar.png",
            linkedin: "https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit"
        });
    }


   return (
    <section className=" bg-slate-100 py-5 px-0 lg:px-48 w-full my-5 justify-center ">
        <div className="flex flex-wrap w-full justify-evenly">
            {
                membersList.map((memberData: MemberData, index: number) => {
                    return <MemberBox key={index} data={memberData}/>
                })
            }
        </div>
    </section>
   );
}

export default Members2;