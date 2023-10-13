
const Buttons = (props) => {
    const { name } = props;
    return (
        <div>
            <button className="btn btn-outline btn-info">{name}</button>
        </div>
    );
};

export default Buttons;