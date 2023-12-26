import { useParams } from "react-router-dom"
import { DATA } from "../data"
import uuid from 'react-uuid';
import { Card } from "../components/Card";


export const CarListPage = () => {
    const params = useParams()
    const actualCate = params?.name.replace('-', ' ')
    let list = DATA.filter(i => i.category === actualCate) ?? [];
    console.log(list)
    return (
        <div>
            <section className="parts" id="parts">
                <div className="heading">
                    <span>Được mua nhiều</span>
                    <h2>Những dòng xe bán chạy nhất hãng</h2>
                    <p>
                        Khách hàng liên hệ trực tiếp với MErcedes sẽ nhận ưu đãi tiền mặt đến hàng trăm triệu đồng cùng gói quà tặng bảo hiểm. phụ kiện cao cấp.
                    </p>
                </div>
                {/* <!--parts container--> */}
                <div className="parts-container container">
                    {/* <!--Box 1--> */}
                    {
                        list == [] ? <div>Dữ liệu đang được cập nhật</div> : DATA.map(item => {
                            return item.category === actualCate ? <div key={uuid()} className="box">
                                <Card item={item} />
                            </div> : <></>
                        })
                    }

                </div>
            </section>
        </div>
    )
}