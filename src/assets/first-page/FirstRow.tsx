import './firstRow.css'

function FirstRow() {
    return (
        <>
        <div className="wrapper">
            <div className="text__wrapper">
                <p className="text-p">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                <a href="#" className="text-a">ShopNow</a>
            </div>
            <div className="language-wrapper">
                <select name="" id="" className="language__selector">
                    <option value="" className="language__selector-select">English</option>
                    <option value="" className="language__selector-select">O'zbekcha</option>
                    <option value="" className="language__selector-select">Russian</option>
                </select>
            </div>
        </div>
        </>
    )
}

export default FirstRow