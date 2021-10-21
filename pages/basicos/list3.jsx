export default function list2(){
        return (
            <div>
                 {generateList(20)}
            </div>
        )
}

function generateList(final  = 10){
    const list = [];
    for(let i = 1; i <= final; i++){
        list.push( <span>{i},</span>)
    }
    return  list;
}