function Child(props) {

    const changeImage = (event) => {
        // props.img = "photo2.jpg"; (x)
        props.changeImg();
    };

    return(
        //부모가 리렌더링되어서 바뀌면 자식부분도 리렌더링. 이부분 다시 실행된다.
        <div className="card">
        <div className="card-header">
        Child
        </div>
        <div className="card-body">
            <button className="btn btn-info btn-sm" onClick={changeImage}>이미지 변경</button>
            <div className="mt-2">
                <img src={"/resources/img/"+props.img} alt="" width="150"/>
            </div>
        </div>
      </div>

    );
}
export default Child;
