type ButtonType={
    callback:()=>void
    title:string
}
export const Button = (props:ButtonType) => {

    const onClickHandler=()=>{
props.callback()
    }
    return (
        <button onClick={onClickHandler}>{props.title}</button>
    );
}