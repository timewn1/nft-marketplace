const M_ItemdetailRedex = (props) => {
    const { type, part, per } = props;

    return (
        <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="nft_attr">
                <h5>{type}</h5>
                <h4>{part}</h4>
                <span>{per}</span>
            </div>
        </div>
    );
}

export default M_ItemdetailRedex;