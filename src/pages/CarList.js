import { useParams } from "react-router-dom"
import { CATEGORIES, DATA } from "../data"
import uuid from 'react-uuid';
import { Card } from "../components/Card";
import { NotFound } from "./NotFound";


export const CarListPage = () => {
    const params = useParams()
    let existedCate = CATEGORIES.filter(cate => cate.name === params.name);
    console.log(existedCate.length)
    if (existedCate.length === 0) {
        return <NotFound />
    }
    const actualCate = params?.name.replace('-', ' ')
    let list = DATA.filter(i => i.category === actualCate) ?? [];

    return (
        <div>
            <section className="parts section-body" id="parts">
                <div className="heading">
                    <span>Được mua nhiều</span>
                    <h2>Những dòng xe bán chạy nhất hãng</h2>
                    <p>
                        Khách hàng liên hệ trực tiếp với MErcedes sẽ nhận ưu đãi tiền mặt đến hàng trăm triệu đồng cùng gói quà tặng bảo hiểm. phụ kiện cao cấp.
                    </p>
                </div>
                {/* <!--parts container--> */}
                <div className="parts-container container ">
                    {/* <!--Box 1--> */}
                    {
                        list == [] ? <div>Dữ liệu đang được cập nhật</div> : DATA.map(item => {
                            return item.category === actualCate ? <div key={uuid()} className="box flex-2">
                                <Card item={item} />
                            </div> : <></>
                        })
                    }

                </div>
            </section>
        </div>
    )
}