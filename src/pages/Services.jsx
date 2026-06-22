// src/pages/Services.jsx
import { useBreakpointValue } from '@chakra-ui/react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { RiBuilding2Line, RiFolderUserLine, RiFolderChartLine, RiNurseLine, RiShakeHandsLine, RiThumbUpLine, RiBuildingLine, RiPencilRuler2Line, RiPageSeparator, RiP2PLine } from "react-icons/ri";
import CarouselStatic from '../components/CarouselStatic.jsx';
import NavBar from '../components/NavBar.jsx';
import BGPoints from '../components/BGPoints.jsx';
import { Fade } from 'react-awesome-reveal';
import color from '../color.jsx';

const Services = ({ id }) => {
    const { t } = useLanguage(); // Usar las traducciones

    // Mapeo de IDs a claves de traducción
    const getServiceKey = (id) => {
        const map = {
            1: 'engineering',
            2: 'manufacturing',
            3: 'transport',
            5: 'supervision'
        };
        return map[id] || 'engineering';
    };

    const serviceKey = getServiceKey(id);
    const serviceData = t.servicesPage[serviceKey];

    // Iconos disponibles
    const icons_ = [
        RiBuilding2Line, RiFolderUserLine, RiFolderChartLine,
        RiNurseLine, RiShakeHandsLine, RiThumbUpLine,
        RiBuildingLine, RiPencilRuler2Line, RiPageSeparator,
        RiP2PLine, RiBuilding2Line, RiFolderUserLine,
        RiFolderChartLine, RiNurseLine, RiShakeHandsLine,
        RiThumbUpLine, RiBuildingLine, RiPencilRuler2Line,
        RiPageSeparator, RiP2PLine
    ];

    // Obtener imágenes según el servicio
    const getImages = (id) => {
        const map = {
            1: [1, 2, 3, 4],
            2: [1, 2, 3, 4],
            3: [1, 2, 3, 4, 5, 6, 7, 8],
            5: [1, 2, 3, 4]
        };
        return map[id] || [1, 2, 3, 4];
    };

    const mobile = useBreakpointValue({ base: true, md: false });

    return (
        <NavBar photo={true} mobile={mobile}>
            <CarouselStatic
                names={getImages(id)}
                folder={`services/${id}`}
                title={serviceData?.title}
                description={serviceData?.description}
            />

            <BGPoints>
                <section className="_main container">
                    <div className="py-16">
                        <div className="mx-auto max-w-7xl">
                            <div className="mx-auto text-center">
                                <h2 className="text-base font-semibold leading-7" style={{ color: color.primary }}>
                                    {serviceData?.description}
                                </h2>
                                <Fade direction="down">
                                    <section className="text-center">
                                        <h2 className="section-title" style={{ paddingTop: 30 }}>
                                            {serviceData?.expertIn} <span className="text-primary-blue">{serviceData?.title}</span>
                                        </h2>
                                    </section>
                                </Fade>
                                <div className="line-banner" style={{ backgroundColor: color.orange }} />
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    <div dangerouslySetInnerHTML={{ __html: serviceData?.content }} />
                                    <div className="line-banner" style={{ backgroundColor: color.orange }} />
                                    <div dangerouslySetInnerHTML={{ __html: serviceData?.header }} />
                                </p>
                            </div>

                            <div className="mx-auto mt-6 mb-16 max-w-2xl lg:max-w-4xl">
                                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                                    {serviceData?.wordKey?.map((feature, index) => {
                                        const Icon_ = icons_[index];
                                        return (
                                            <div key={`${feature.charAt()}-${index}`} className="relative pl-16">
                                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg" style={{ backgroundColor: color.primary }}>
                                                        {Icon_ && <Icon_ className="h-6 w-6 text-white" aria-hidden="true" />}
                                                    </div>
                                                    {feature}
                                                </dt>
                                            </div>
                                        );
                                    })}
                                </dl>
                            </div>

                            <div className="line-banner mt-6" style={{ backgroundColor: color.orange }} />
                            <div className="mx-auto text-center">
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    <div dangerouslySetInnerHTML={{ __html: serviceData?.footer }} />
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </BGPoints>
        </NavBar>
    );
};

export default Services;