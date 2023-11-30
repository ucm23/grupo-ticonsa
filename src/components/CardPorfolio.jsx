import { Card, CardBody } from "@chakra-ui/react"
import { Badge, Tooltip } from "antd"
import PropTypes from 'prop-types'
import {BsFillCalendarCheckFill} from 'react-icons/bs'

function getColor() {
    const Colors = [
        "pink",
        "red",
        "cyan",
        "green",
        "purple",
        "volcano",
        "magenta",
    ];

    const index = Math.floor(Math.random() * Colors.length);
    return Colors[index];
}
  

const CardPorfolio = ({img,year,name}) => 
    <Card className="m-4 shadow" style={{width: "22rem"}}>
        <Badge.Ribbon 
            text={
                <h5 className="mb-0 py-1 d-flex align-items-center" >
                    <BsFillCalendarCheckFill className="d-inline mx-1" />
                    {year || 'Ticonsa'}
                </h5>
            } 
            color={getColor()}
        >
            <CardBody>
                <Tooltip 
                    title={`${name} (${year||'Ticonsa'})`} 
                    placement="left"
                >
                    <section className="overflow-hidden rounded-0" >
                        <img 
                            src={img} 
                            alt={name} 
                            loading="lazy" 
                            style={{ width: "20rem" }}
                            className="img_projects "
                        />
                    </section>
                </Tooltip>
                <h4 className="text-center mb-0 mt-1">{name}</h4>
            </CardBody>
        </Badge.Ribbon>
    </Card>


CardPorfolio.propTypes = {
    img: PropTypes.string,
    year: PropTypes.string,
    name: PropTypes.string,
}

export default CardPorfolio