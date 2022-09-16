import TeamCard from "./TeamCard";

const Workwithus = () => {
    return (  
        <div className="container bg-grey flex flex-col gap-10 w-fit items-center px-5">
            <div className="title text-[28px] font-bold">
              Work with us,  <span className="text-primary">make a difference</span>
            </div>
            <div className="card flex flex-col lg:flex-row gap-6">
                <TeamCard source="/images/member1.png" text="Web apps"/>
                <TeamCard source="/images/member2.png" text="Hardware"/>
                <TeamCard source="/images/member3.png" text="Human ressources"/>

            </div>
        </div>
    );
}
 
export default Workwithus;