import CarTransportForm from "@components/Forms/CarTransportForm";
import LandingContactUs from "@components/LandingPage/ContactUs";
import LandingFooter from "@components/UI/LandingFooter";
import Navbar from "@components/UI/LandingNavbar";
import { FACEBOOK_APP_ID, FACEBOOK_URL, INSTAGRAM_URL, LINKEDIN_URL, SITE_URL } from "@utils/contants/general";
import LOCALISATION_DATA, { COUNTRY_TO_LOCALE } from "@utils/localisation"
import useLocale from "@utils/useLocale";

import { NextSeo } from "next-seo";
import { SocialProfileJsonLd, LocalBusinessJsonLd, BrandJsonLd } from 'next-seo';
import { useRouter } from "next/router";
import Image from 'next/image'
import image2 from '@public/images/car-transport/price-tag.png'
import image1 from '@public/images/car-transport/delivery-notes.png'
import image3 from '@public/images/car-transport/delivery-cart.png'
import image4 from '@public/images/car-transport/empty-pocket.jpg'
import image5 from '@public/images/car-transport/trucks-lined-up.jpg'
import image6 from '@public/images/car-transport/human-thumb.jpg'
import background from '@public/images/car-transport/car-transport-background.jpg'
import BgImage from "@components/Custom/BgImage";

const HOW_IT_WORKS = [
    {
        key: "car-transport-works-1",
        title: "Share your moving details",
        description: "Share Your Moving Details through Website/ Mobile App / Call",
        image: image1
    },
    {
        key: "car-transport-works-2",
        title: "Get free quotes",
        description: "Get Free Online Quotations from Verified Car & Bike Movers",
        image: image2
    },
    {
        key: "car-transport-works-3",
        title: "Confirm mover and schedule the service",
        description: "Our Experts Help You to Book Verified Car movers and confirm the moving.",
        image: image3
    }
]

export const WHY_US = [
    {
        'key': 'whyus1',
        'title': 'No more queues',
        'description': 'Book services according to your schedule with zero wait time.',
        'image': image4
    },
    {
        'key': 'whyus2',
        'title': 'Diverse Options',
        'description': 'Choose from a variety of stores and services near you, select the store which suits you best.',
        'image': image5
    },
    {
        'key': 'whyus3',
        'title': 'Customer Satisfaction',
        'description': 'We help you find the most reliable Car Care Services around you. Ever facing any problem with anything? We are always there to listen.',
        'image': image6
    },
]

export default function CarTransportService() {
    const router = useRouter()

    const { locale } = useLocale()

    return (
        <>
            <NextSeo
                title="Car And Vehicle Transportation Service in Bangalore"
                description="We at Autoave take pride in our services. We are a team of highly qualified and experienced car and vehicle movers. We are here to help you with your car and vehicle transportation needs."
                canonical={`${LOCALISATION_DATA[locale].domain}/car-transport-service/bangalore`}
                openGraph={{
                    url: `${LOCALISATION_DATA[locale].domain}/car-transport-service/bangalore`,
                    title: 'Car And Vehicle Transportation Service in Bangalore',
                    description: 'We at Autoave take pride in our services. We are a team of highly qualified and experienced car and vehicle movers. We are here to help you with your car and vehicle transportation needs.',
                    images: [
                        {
                            url: `${LOCALISATION_DATA[locale].domain}/autoave-banner.jpg`,
                            width: 1200,
                            height: 628,
                            alt: 'Autoave Banner',
                            type: 'image/jpeg',
                        },
                    ],
                    site_name: 'Autoave',
                }}
                additionalMetaTags={[{
                    name: 'keywords',
                    content: 'Car transport in bangalore, vehicle transport in bangalore, bike transport in bangalore, car shifting'
                }]}
            />

            <SocialProfileJsonLd
                type="Organization"
                name="Autoave Transportation"
                url={SITE_URL}
                sameAs={[
                    FACEBOOK_URL,
                    INSTAGRAM_URL,
                    LINKEDIN_URL
                ]}
            />

            <LocalBusinessJsonLd
                type="Store"
                id="https://www.autoave.in/"
                name="Autoave Transportation Service"
                description="Best Car Transportation Service in Bangalore"
                url="https://www.autoave.in/car-transport-service/bangalore"
                telephone="+91-7847099990"
                address={{
                    streetAddress: '',
                    addressLocality: '',
                    addressRegion: 'Bangalore',
                    postalCode: '',
                    addressCountry: 'IN',
                }}
                geo={{
                    latitude: '',
                    longitude: '',
                }}
                rating={{
                    ratingValue: '4.7',
                    ratingCount: '64',
                }}
            />

            <div className="flex flex-col justify-between min-h-screen">
                <Navbar />
                <div className="mt-16">
                    <BgImage imgsrc={background} imgalt="Car Transport Background" tintOpacity="0.4">
                        <div>
                            <div className="py-12 px-4 lg:py-32 mx-auto text-center">
                                <div className="mb-8">
                                    <h1 className="text-shadow text-3xl lg:text-5xl font-bold tracking-tighter mb-2 text-white">
                                        Best Car Transport Services in Bangalore
                                    </h1>
                                    <h2 className="text-shadow font-normal text-lg lg:text-xl text-white">
                                        Just fill the form and we will reach you with lowest prices and best service!
                                    </h2>
                                </div>
                                <div>
                                    <CarTransportForm />
                                </div>
                            </div>
                        </div>
                    </BgImage>
                    {/* <div className="block lg:flex">
                        <div className="flex-1 py-0 md:py-32 px-4">
                            <div className="border py-8 px-4 md:p-12 max-w-xl mx-auto">
                                <h1 className="text-3xl lg:text-4xl font-bold tracking-tighter mb-2">
                                    Best Car Transport Services across the country
                                </h1>
                                <h2 className="font-normal">
                                    Just fill the form and we will reach you with lowest prices and best service!
                                </h2>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="p-12 max-w-xl mx-auto">
                                <h6 className="text-xl mb-5">
                                    Fill this form to get a qoutation
                                </h6>
                                <CarTransportForm />
                            </div>
                        </div>
                    </div> */}

                    <div className="relative py-12">
                        <div className="svg-background-lines">
                            <svg viewBox="0 0 1440 668" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M-56.4559 176.716C49.6634 178.233 128.468 158.595 181.17 140.127C234.464 121.45 274.504 99.2201 341.444 91.5621C415.298 83.0036 460.377 94.2279 477.992 99.8095C502.411 107.557 500.145 111.042 539.402 127.373C614.813 158.746 631.994 149.585 664.817 168.757C719.24 200.54 694.038 238.579 747.814 288.498C786.754 324.66 856.409 357.09 927.08 345.853C993.631 335.267 1008.63 294.305 1076.47 294.705C1104.33 294.868 1126.11 302.413 1169.65 317.501C1225.46 336.765 1261.48 357.42 1276.06 364.86C1319.26 386.924 1392.26 405.14 1521.45 381.843" stroke="#f7fafc" strokeMiterlimit="10" />
                                <path d="M-59.9779 189.765C42.5506 192.115 122.732 175.084 180.005 156.096C226.582 140.403 263.343 121.841 311.303 110.636C321.79 108.196 332.784 105.914 344.494 104.152C418.273 93.0729 463.937 100.393 482.89 104.021C508.31 108.872 507.797 111.603 546.306 127.584C573.449 138.83 593.007 145.639 608.265 150.337C634.202 158.314 647.627 159.964 666.939 172.403C674.151 177.013 680.712 182.442 686.491 188.583C713.224 216.971 705.831 249.037 751.683 288.128C791.594 322.157 861.356 351.649 930.882 340.369C936.391 339.472 941.871 338.314 947.301 336.899C1002.1 322.596 1019.94 289.975 1079.6 290.254C1085.89 290.274 1092.14 290.696 1098.3 291.514C1119.02 294.201 1139.64 301.251 1172.26 312.596C1226.28 331.471 1261.77 351.851 1277.86 360.11C1289.64 366.115 1302.02 371.125 1314.86 375.089C1359.27 388.928 1424.37 396.111 1520.74 380.711" stroke="#f7fafc" strokeMiterlimit="10" />
                                <path d="M-63.6662 204.152C35.2511 207.311 116.846 193.13 178.681 173.331C227.783 157.621 266.286 137.997 313.577 125.879C324.374 123.096 335.547 120.303 347.386 118.122C421.09 104.491 467.539 106.426 487.639 109.535C513.533 113.573 515.329 113.446 553.025 129.042C579.415 139.982 598.767 147.522 613.59 152.936C638.572 162.016 650.927 164.544 668.797 177.307C675.598 182.215 681.807 187.805 687.331 193.993C713.034 222.233 708.846 252.768 755.354 288.954C796.237 320.791 866.1 347.298 934.477 335.982C940.277 334.966 945.661 333.911 950.784 332.517C1007.28 317.951 1025.02 286.778 1082.51 287.037C1088.76 287.04 1094.96 287.437 1101.09 288.228C1122.19 290.852 1142.81 297.791 1174.62 309.029C1226.88 327.441 1261.79 347.571 1279.42 356.499C1291.12 362.477 1303.38 367.507 1316.08 371.541C1360.05 385.616 1424.66 393.865 1519.71 380.716" stroke="#f7fafc" strokeMiterlimit="10" />
                                <path d="M-67.4513 219.674C27.832 223.705 110.824 212.206 177.224 191.833C228.809 175.992 269.082 155.402 315.672 142.358C326.794 139.235 338.158 135.947 350.096 133.327C423.712 117.17 470.285 116.761 492.197 116.213C519.302 115.548 522.668 116.421 559.564 131.612C585.235 142.205 604.376 150.489 618.843 156.625C642.853 166.791 654.164 170.234 670.592 183.295C676.921 188.499 682.737 194.241 687.977 200.46C712.651 228.506 711.768 257.459 758.803 290.65C800.718 320.25 870.611 343.729 937.833 332.374C943.586 331.35 948.94 330.289 954.023 328.933C1012.2 314.038 1029.87 284.424 1085.19 284.506C1091.39 284.489 1097.56 284.864 1103.65 285.626C1125.13 288.169 1145.8 295.026 1176.77 306.062C1227.23 323.967 1261.6 343.812 1280.73 353.527C1292.37 359.444 1304.53 364.484 1317.1 368.605C1360.62 382.903 1424.74 392.232 1518.44 381.347" stroke="#f7fafc" strokeMiterlimit="10" />
                                <path d="M-71.2218 235.332C20.4426 240.208 104.79 231.442 175.773 210.491C229.857 194.515 271.887 172.949 317.799 159.014C329.229 155.55 340.77 151.748 352.837 148.708C426.351 130.066 473.225 125.818 496.772 123.058C524.594 119.792 529.961 119.534 566.118 134.316C591.124 144.604 609.965 153.575 624.053 160.386C647.092 171.622 657.336 176.013 672.339 189.35C678.186 194.837 683.611 200.724 688.578 206.972C712.242 234.775 714.663 262.134 762.221 292.385C805.17 319.701 875.069 340.133 941.146 328.763C946.836 327.731 952.159 326.663 957.221 325.334C1017.08 310.133 1034.63 282.259 1087.8 282.07C1093.96 282.058 1100.09 282.408 1106.14 283.119C1127.97 285.591 1148.61 292.336 1178.86 303.175C1227.54 320.593 1261.34 340.152 1281.99 350.606C1293.55 356.484 1305.6 361.537 1318.04 365.725C1361.12 380.256 1424.76 390.635 1517.11 382.068" stroke="#f7fafc" strokeMiterlimit="10" />
                                <path d="M-73.6104 245.316C14.402 251.012 100.087 245.043 175.612 223.62C232.162 207.576 275.959 185.101 321.165 170.411C332.885 166.606 344.62 162.377 356.803 158.883C430.157 137.851 477.348 129.867 502.479 124.795C531.003 119.055 538.488 117.552 573.778 131.851C593.263 139.77 612.15 148.819 630.343 158.953C652.454 171.189 661.589 176.533 675.129 189.996C681.037 195.897 685.46 202.003 690.359 207.996C713.016 235.348 718.736 261.08 766.767 288.152C810.785 313.03 880.63 330.321 945.521 318.994C951.163 317.96 956.452 316.892 961.476 315.594C1023.01 300.215 1040.48 273.962 1091.43 273.721C1097.54 273.702 1103.63 274.032 1109.64 274.707C1131.83 277.129 1152.46 283.683 1181.89 294.211C1228.76 311.004 1262 330.208 1284.14 341.345C1295.63 347.151 1307.57 352.184 1319.89 356.412C1362.5 371.098 1425.61 382.503 1516.58 376.268" stroke="#f7fafc" strokeMiterlimit="10" />
                                <path d="M-75.3626 252.263C8.97318 258.728 95.9818 255.533 176.042 233.727C235.048 217.653 280.575 194.298 325.078 179.005C337.106 174.856 349.003 170.194 361.31 166.292C434.563 142.992 482.074 131.337 508.773 123.949C537.931 115.841 547.531 113.027 582.015 126.804C601.337 134.525 619.798 143.86 637.197 154.707C658.318 167.869 666.401 174.183 678.485 187.864C683.855 193.904 687.802 200.169 692.639 206.189C714.279 233.153 723.366 256.916 771.797 280.934C816.913 303.304 886.669 317.464 950.367 306.191C955.942 305.156 961.182 304.089 966.198 302.828C1029.38 287.356 1046.81 262.828 1095.47 262.56C1101.54 262.521 1107.58 262.824 1113.56 263.467C1136.08 265.8 1156.73 272.183 1185.31 282.485C1230.37 298.663 1263.03 317.42 1286.68 329.241C1298.08 334.952 1309.91 339.954 1322.09 344.219C1364.25 359.025 1426.83 371.421 1516.41 367.5" stroke="#f7fafc" strokeMiterlimit="10" />
                                <path d="M-77.0816 259.275C3.56786 266.563 91.8781 266.05 176.502 243.864C237.946 227.743 285.193 203.479 329.011 187.494C341.352 182.975 353.443 177.886 365.852 173.607C438.964 148.085 486.816 132.857 515.053 123.064C545.009 112.686 556.57 108.514 590.232 121.774C609.411 129.384 627.454 139.083 644.024 150.691C664.13 164.74 671.166 172.078 681.83 185.871C686.612 192.06 690.124 198.441 694.876 204.534C715.534 231.011 728.01 252.956 776.815 273.919C823.048 293.78 892.665 304.853 955.115 293.659C960.641 292.624 965.847 291.559 970.826 290.316C1035.68 274.642 1052.94 251.853 1099.47 251.417C1105.49 251.374 1111.48 251.65 1117.42 252.245C1140.31 254.416 1160.94 260.705 1188.69 270.755C1231.95 286.282 1264 304.643 1289.17 317.098C1300.5 322.735 1312.22 327.718 1324.26 332.022C1365.96 346.886 1428.01 360.265 1516.17 358.695" stroke="#f7fafc" strokeMiterlimit="10" />
                                <path d="M-78.8178 266.266C-1.83057 274.341 87.7902 276.518 176.941 253.948C240.839 237.776 289.806 212.592 332.938 196.011C345.551 191.166 357.842 185.701 370.361 180.924C443.348 153.198 491.573 134.429 521.331 122.249C552.049 109.633 565.591 104.084 598.448 116.837C617.478 124.332 635.114 134.351 650.863 146.612C670.079 161.569 675.926 169.91 685.171 183.817C689.379 190.172 692.493 196.642 697.143 202.807C716.818 228.823 732.658 248.923 781.827 266.909C829.218 284.246 898.667 292.323 959.972 281.183C965.448 280.148 970.62 279.085 975.557 277.89C1042.08 262.121 1059.22 240.977 1103.56 240.43C1109.53 240.382 1115.48 240.633 1121.38 241.182C1144.63 243.237 1165.31 249.41 1192.2 259.18C1233.64 274.093 1265.12 292.054 1291.79 305.153C1303.03 310.726 1314.62 315.7 1326.53 320.055C1367.76 335.089 1429.29 349.385 1516.06 350.114" stroke="#f7fafc" strokeMiterlimit="10" />
                                <path d="M-80.5364 273.17C-7.20073 281.982 83.7633 286.812 177.434 263.873C243.849 247.641 294.442 221.516 336.914 204.376C349.823 199.164 362.299 193.323 374.926 188.146C447.763 158.273 496.372 136.01 527.649 121.386C559.177 106.631 574.663 99.6524 606.699 111.903C625.585 119.333 642.811 129.708 657.703 142.622C675.975 158.429 680.685 167.832 688.516 181.838C692.15 188.359 694.822 194.898 699.463 201.159C718.191 226.71 737.44 244.896 786.923 260.023C835.476 274.831 904.735 279.968 964.86 268.891C970.27 267.855 975.408 266.793 980.307 265.709C1048.47 249.827 1065.51 230.311 1107.63 229.682C1113.57 229.599 1119.49 229.826 1125.36 230.361C1148.94 232.424 1169.58 238.335 1195.73 247.792C1235.35 262.099 1266.24 279.665 1294.42 293.407C1304.6 298.381 1315.97 303.42 1328.85 308.185C1369.61 323.326 1430.62 338.593 1515.99 341.584" stroke="#f7fafc" strokeMiterlimit="10" />
                                <path d="M-82.2072 279.819C-12.6125 289.414 79.6738 296.889 177.889 273.6C246.675 257.292 299.025 230.214 340.85 212.534C354.039 206.955 366.713 200.758 379.453 195.152C452.203 163.155 501.224 137.443 533.903 120.398C566.259 103.431 583.653 95.1227 614.884 106.878C633.649 114.251 650.49 124.969 664.538 138.48C681.895 155.15 685.339 165.61 691.858 179.697C694.918 186.382 697.177 193.009 701.669 199.337C719.455 224.4 742.078 240.779 791.87 253.012C841.661 265.244 910.67 267.524 969.6 256.507C974.96 255.471 980.064 254.411 984.929 253.328C1054.76 237.333 1071.69 219.429 1111.65 218.71C1117.54 218.612 1123.4 218.817 1129.21 219.325C1153.19 221.278 1173.77 227.052 1199.02 236.293C1236.85 249.989 1267.14 267.179 1296.83 281.544C1306.97 286.462 1318.24 291.456 1330.94 296.261C1371.23 311.51 1431.71 327.728 1515.68 332.994" stroke="#f7fafc" strokeMiterlimit="10" />
                                <path d="M-83.8327 286.333C-17.8521 296.734 75.6701 306.764 178.422 283.14C249.695 266.812 303.654 238.695 344.821 220.538C358.309 214.581 371.177 208.046 384.062 202.017C456.695 167.892 506.135 138.802 540.216 119.263C573.429 100.272 592.781 90.4652 623.077 101.734C643.193 109.218 660.238 122.406 671.366 134.214C687.83 151.714 690.146 163.267 695.211 177.42C697.665 184.267 699.528 190.982 703.915 197.397C720.782 221.951 746.742 236.461 796.859 245.902C847.798 255.543 916.643 255.043 974.378 244.085C979.671 243.047 984.742 241.988 989.589 240.909C1061.07 224.783 1077.88 208.474 1115.6 207.674C1121.44 207.563 1127.26 207.743 1133.03 208.214C1157.33 210.037 1177.93 215.697 1202.44 224.695C1238.46 237.799 1268.12 254.6 1299.32 269.599C1309.41 274.447 1320.58 279.427 1333.09 284.241C1372.92 299.616 1432.87 316.777 1515.45 324.238" stroke="#f7fafc" strokeMiterlimit="10" />
                                <path d="M-85.4498 292.721C-23.1256 303.903 71.6625 316.304 178.962 292.513C252.588 275.921 308.288 247.01 348.837 228.334C362.593 221.983 375.7 215.13 388.634 208.672C461.197 172.525 511.094 139.962 546.552 118.066C580.65 97.0042 601.765 85.7833 631.387 96.5647C650.798 103.68 667.625 117.407 678.295 129.921C693.867 148.246 694.885 160.854 698.653 175.106C700.55 182.118 701.991 188.89 706.289 195.394C722.223 219.521 751.585 232.079 801.985 238.887C854.158 245.921 922.75 242.702 979.294 231.785C984.541 230.757 989.572 229.699 994.387 228.61C1067.53 212.401 1084.23 197.641 1119.74 196.763C1125.54 196.63 1131.31 196.785 1137.04 197.227C1161.69 198.954 1182.29 204.487 1206 213.223C1240.19 225.726 1269.28 242.226 1302.02 257.799C1312.06 262.609 1323.12 267.529 1335.48 272.37C1374.83 287.872 1434.25 305.972 1515.43 315.688" stroke="#f7fafc" strokeMiterlimit="10" />
                                <path d="M-87.0391 298.97C-28.3792 310.898 67.7251 325.886 179.526 301.725C255.59 285.075 312.963 255.124 352.862 236.018C366.881 229.306 380.185 222.102 393.247 215.225C465.728 177.036 516.15 141.09 552.89 116.751C587.905 93.6211 610.856 80.9415 639.592 91.2515C658.316 97.9884 674.939 112.268 685.115 125.51C699.827 144.66 699.541 158.346 701.968 172.678C703.211 179.862 704.338 186.717 708.519 193.291C723.659 216.95 756.114 229.08 807.073 231.75C860.649 234.557 928.818 230.28 984.183 219.419C989.375 218.39 994.367 217.332 999.159 216.246C1073.97 200.042 1090.55 186.711 1123.85 185.754C1129.6 185.613 1135.33 185.748 1141.02 186.16C1166.01 187.807 1186.68 193.189 1209.51 201.629C1241.81 213.622 1270.36 229.844 1304.61 245.955C1314.61 250.713 1325.56 255.605 1337.73 260.472C1376.62 276.102 1435.52 295.136 1515.29 307.059" stroke="#f7fafc" strokeMiterlimit="10" />
                                <path d="M-88.6726 305.108C-33.6553 317.765 63.7417 335.352 180.041 310.804C258.543 294.093 317.489 263.11 356.831 243.509C371.166 236.412 384.658 228.903 397.812 221.545C470.251 181.281 521.068 142.049 559.203 115.277C595.193 90.1256 619.993 76.0881 647.945 85.911C665.967 92.2718 682.388 107.088 692.086 121.056C705.944 140.998 704.308 155.752 705.494 170.161C706.114 177.519 706.9 184.438 710.973 191.116C725.13 214.296 761.106 223.013 812.157 224.579C866.631 226.294 934.864 217.86 989.036 207.051C994.1 206.004 999.164 204.958 1003.89 203.88C1080.35 187.541 1096.84 175.75 1127.94 174.73C1133.64 174.567 1139.33 174.677 1144.97 175.062C1170.31 176.615 1190.91 181.866 1212.98 190.085C1243.57 201.44 1271.49 217.212 1307.21 234.024C1317.18 238.732 1328.06 243.524 1340.07 248.496C1378.51 264.165 1436.88 284.206 1515.18 298.317" stroke="#f7fafc" strokeMiterlimit="10" />
                                <path d="M-90.1419 311.157C-38.7917 324.597 59.892 344.707 180.715 319.789C261.715 303.022 322.198 270.931 360.9 250.932C375.443 243.426 389.23 235.639 402.459 227.891C474.912 185.777 526.148 142.977 565.492 113.814C602.394 86.5546 628.915 71.1549 656.169 80.5488C673.49 86.5371 689.741 101.891 698.948 116.567C711.952 137.388 708.953 153.113 708.893 167.629C708.84 175.172 709.319 182.145 713.272 188.909C726.557 211.629 765.882 218.331 817.194 217.427C872.817 216.512 940.893 205.499 993.859 194.724C998.921 193.681 1003.87 192.627 1008.58 191.672C1086.68 175.197 1103.05 164.885 1131.97 163.79C1137.66 163.636 1143.34 163.756 1148.97 164.149C1172.47 165.48 1195.27 170.384 1216.45 178.667C1245.24 189.455 1272.57 204.864 1309.8 222.302C1319.72 226.944 1330.48 231.755 1342.27 236.705C1397.44 259.559 1455.27 277.326 1514.99 289.764" stroke="#f7fafc" strokeMiterlimit="10" />
                                <path d="M-91.6795 317.133C-43.9717 331.325 56.0072 353.975 181.32 328.668C264.689 311.831 326.802 278.732 365.006 258.273C534.592 167.37 604.546 54.8712 664.511 75.1395C681.131 80.7587 697.212 96.6499 705.91 112.043C724.49 144.895 704.518 166.683 715.691 186.668C743.08 235.676 916.134 199.648 1013.39 179.407C1108.22 159.665 1113.28 150.967 1152.89 153.101C1222.03 156.789 1252.73 185.683 1344.56 224.872C1399.17 248.087 1456.17 266.91 1514.96 281.148" stroke="#f7fafc" strokeMiterlimit="10" />
                                <path d="M-92.2728 320.552C-43.4037 335.804 53.6502 357.06 173.5 332.769C256.239 315.936 316.122 282.173 357.04 260.676C520.475 174.924 586.262 71.8126 648.387 87.2743C672.661 93.3094 696.589 103.129 711.12 116.14C739.667 141.723 723.519 160.764 739.115 180.555C773.253 223.907 934.07 193.568 1026.51 175.245C1116.57 157.306 1121.42 150.332 1162.71 155.641C1231.33 164.46 1260.98 190.327 1347.41 227.874C1401.34 251.29 1457.95 269.787 1516.51 283.12" stroke="#f7fafc" strokeMiterlimit="10" />
                                <path d="M-92.8917 324.122C-11.4802 350.206 77.9092 354.661 165.649 337.009C247.755 320.195 305.315 285.726 349.043 263.21C506.177 182.362 568.901 87.1502 632.239 99.5846C664.374 105.905 695.028 109.58 716.299 120.386C752.803 138.873 741.939 154.653 762.521 174.544C801.848 212.507 951.984 187.575 1039.61 171.18C1124.77 155.04 1129.45 149.652 1172.53 158.312C1240.49 171.959 1269.18 195.258 1350.23 231.023C1403.45 254.628 1459.66 272.796 1517.95 285.229" stroke="#f7fafc" strokeMiterlimit="10" />
                                <path d="M-94.0098 331.024C-15.105 357.121 71.8867 361.809 157.259 344.565C238.702 327.779 293.942 292.655 340.452 269.165C491.002 193.142 549.366 116.57 615.419 115.6C656.741 114.996 692.197 120.085 720.834 128.267C764.106 140.615 759.232 152.075 785.28 172.049C828.402 205.116 969.194 185.244 1051.98 170.656C1132.3 156.506 1136.7 152.418 1181.57 164.55C1248.89 182.75 1276.58 203.693 1352.26 237.632C1404.77 261.413 1460.59 279.232 1518.61 290.729" stroke="#f7fafc" strokeMiterlimit="10" />
                                <path d="M-95.7233 341.921C-19.3492 367.972 65.2247 372.868 148.203 356.044C228.981 339.306 281.873 303.595 331.166 279.192C475.031 207.97 531.454 139.115 597.852 135.987C647.178 133.674 691.576 127.277 724.563 140.493C769.953 158.678 771.568 159.795 807.217 173.816C846.351 210.093 985.546 187.104 1063.49 174.398C1138.92 162.156 1143.06 159.363 1189.72 175.081C1256.38 197.54 1283.03 216.385 1353.34 248.372C1405.12 272.277 1460.55 289.709 1518.27 300.243" stroke="#f7fafc" strokeMiterlimit="10" />
                                <path d="M-97.4755 353.081C-23.6386 379.094 58.5133 384.241 139.116 367.904C219.222 351.246 269.757 314.906 321.845 289.611C458.926 223.027 513.507 161.208 580.138 156.748C637.575 152.919 686.671 142.977 728.245 153.135C781.852 166.228 787.347 163.533 829.102 176.018C871.142 208.928 1001.82 189.259 1074.83 178.546C1145.39 168.21 1149.3 166.562 1197.71 186.002C1263.85 212.511 1289.31 229.489 1354.27 259.498C1405.33 283.526 1460.36 300.571 1517.78 310.14" stroke="#f7fafc" strokeMiterlimit="10" />
                                <path d="M-99.2636 364.473C-27.9746 390.407 51.7377 395.777 129.943 379.914C209.379 363.321 257.526 326.354 312.437 300.189C442.708 238.114 495.516 182.965 562.541 177.672C627.888 172.511 680.761 168.208 731.832 165.926C794.896 163.104 803.03 167.427 850.884 178.392C895.891 208.037 1018.04 191.666 1086.28 182.895C1151.95 174.462 1155.66 173.868 1205.8 197.108C1271.3 227.479 1295.65 242.826 1355.21 270.81C1405.55 294.951 1460.21 311.61 1517.3 320.221" stroke="#f7fafc" strokeMiterlimit="10" />
                                <path d="M-101.072 376.017C-44.9372 397.4 33.9945 410.124 120.794 392.092C199.579 375.718 245.309 337.944 303.034 310.943C426.409 253.241 477.533 204.531 544.838 198.744C618.218 192.447 677.033 185.097 735.431 178.898C805.373 171.456 821.858 163.287 872.67 180.972C925.319 199.293 1034.21 194.318 1097.6 187.434C1158.4 180.883 1161.95 181.3 1213.77 208.371C1278.88 242.479 1301.87 256.356 1356.2 282.287C1389.97 298.406 1441.42 320.157 1516.87 330.467" stroke="#f7fafc" strokeMiterlimit="10" />
                                <path d="M-102.916 387.774C-45.5776 410.128 30.3131 421.414 111.596 404.465C189.708 388.173 233.035 349.688 293.597 321.901C410.015 268.467 459.325 226.018 527.118 220C608.504 212.762 673.392 202.28 738.972 192.072C815.955 180.083 837.033 167.518 894.39 183.782C949.052 199.331 1050.34 197.08 1108.89 192.199C1164.85 187.53 1168.36 188.755 1221.7 219.857C1286.45 257.587 1308 270.141 1357.05 293.96C1390.28 310.098 1440.91 331.745 1516.3 340.925" stroke="#f7fafc" strokeMiterlimit="10" />
                                <path d="M-104.78 399.669C-46.2057 423.068 26.611 432.842 102.376 416.988C179.814 400.778 220.71 361.567 284.136 333.015C393.567 283.746 441.124 247.49 509.359 241.386C598.796 233.381 669.792 219.659 742.479 205.401C826.625 188.905 852.119 172.271 916.068 186.774C972.808 199.64 1066.41 200.099 1120.13 197.14C1171.15 194.309 1174.75 196.367 1229.58 231.5C1294.06 272.791 1314.06 284.12 1357.87 305.789C1390.56 321.961 1440.33 343.561 1515.7 351.526" stroke="#f7fafc" strokeMiterlimit="10" />
                                <path d="M-106.675 411.745C-46.9562 436.073 22.8972 444.438 93.1304 429.676C169.896 413.533 208.339 373.552 274.648 344.299C377.045 299.107 423.169 261.735 491.589 262.918C588.592 264.59 666.204 237.213 745.95 218.898C837.315 197.927 873.353 163.066 937.701 189.963C991.444 212.483 1082.39 203.219 1131.34 202.273C1177.45 201.323 1181.15 204.107 1237.44 243.301C1301.71 288.088 1320.05 298.318 1358.65 317.787C1390.79 334.007 1439.73 355.517 1515.05 362.313" stroke="#f7fafc" strokeMiterlimit="10" />
                                <path d="M-108.631 424.227C-47.7177 449.542 19.1095 456.406 83.8202 442.855C159.897 426.779 195.866 385.974 265.075 356.089C360.485 314.896 404.669 284.728 473.718 284.935C578.832 285.221 662.58 255.288 749.335 232.91C847.978 207.486 886.712 170.423 959.236 193.7C1016.76 212.175 1098.35 206.999 1142.41 207.945C1183.65 208.827 1187.57 212.332 1245.16 255.632C1309.32 303.862 1325.9 313.063 1359.33 330.292C1390.89 346.571 1439.02 367.959 1514.3 373.59" stroke="#f7fafc" strokeMiterlimit="10" />
                                <path d="M-110.711 437.53C-48.6237 463.821 15.1639 469.245 74.3944 456.685C149.794 440.683 183.253 399.005 255.393 368.561C343.647 331.306 386.042 308.386 455.746 307.623C569.022 306.385 658.85 274.073 752.559 247.648C858.559 217.756 900.157 179.379 980.59 198.21C1041.75 212.529 1114.07 211.452 1153.34 214.367C1189.66 217.057 1193.87 221.269 1252.72 268.675C1316.8 320.296 1331.6 328.556 1359.82 343.499C1390.8 359.875 1438.2 381.101 1513.36 385.56" stroke="#f7fafc" strokeMiterlimit="10" />
                                <path d="M-112.828 451.063C-49.5518 478.326 11.2029 482.287 64.9168 470.829C139.641 454.887 170.561 412.248 245.656 381.355C326.821 347.956 367.322 332.294 437.706 330.595C559.106 327.671 655.094 293.147 755.719 262.687C869.163 228.368 913.775 189.306 1001.87 203.058C1066.51 213.149 1129.74 216.216 1164.18 221.133C1195.58 225.595 1200.15 230.489 1260.2 282.038C1324.29 337.03 1337.05 344.462 1360.23 357.025C1390.59 373.539 1437.14 394.56 1512.33 397.853" stroke="#f7fafc" strokeMiterlimit="10" />
                                <path d="M-115.137 465.83C-50.6736 494.038 7.01234 496.461 55.2426 486.185C129.265 470.171 157.61 426.602 235.711 395.397C309.761 365.805 348.377 357.407 419.464 354.797C548.939 350.042 651.122 313.495 758.56 279.005C879.307 240.276 926.498 207.269 1022.79 209.247C1091.41 210.67 1145.04 222.315 1174.67 229.227C1201.21 235.426 1206.14 241.028 1267.33 296.665C1331.44 355.012 1342.19 361.559 1360.29 371.771C1389.95 388.515 1435.81 409.235 1510.94 411.371" stroke="#f7fafc" strokeMiterlimit="10" />
                                <path d="M-117.419 480.429C-51.7886 509.594 2.87774 510.58 45.6143 501.387C118.94 485.449 144.629 440.629 225.797 409.279C292.731 383.426 329.442 382.29 401.246 378.786C538.801 372.075 647.201 333.63 761.568 295.162C889.764 252.022 941.297 216.388 1043.88 215.31C1115.12 214.593 1160.55 228.19 1185.31 237.172C1207 245.089 1212.35 251.371 1274.6 311.14C1338.83 372.798 1347.42 378.587 1360.52 386.392C1389.34 403.546 1434.64 423.759 1509.73 424.744" stroke="#f7fafc" strokeMiterlimit="10" />
                                <path d="M-119.704 495.027C-52.9358 525.13 -1.16284 524.712 35.9756 516.573C108.557 500.704 131.59 454.397 215.889 423.143C275.724 400.956 310.503 407.108 383.055 402.717C528.634 393.904 643.309 353.66 764.496 311.262C900.132 263.739 956.142 225.438 1064.87 221.349C1138.99 218.569 1176.05 233.991 1195.88 245.105C1212.8 254.591 1218.47 261.676 1281.82 325.583C1346.17 390.559 1352.52 395.63 1360.68 400.968C1388.25 419.03 1433.39 438.271 1508.44 438.111" stroke="#f7fafc" strokeMiterlimit="10" />
                            </svg>
                        </div>

                        <div className="relative container max-w-7xl z-10">
                            <h2 className="mb-6 lg:mb-16 text-3xl lg:text-5xl font-bold tracking-tighter text-center">
                                How it works?
                            </h2>
                            <div className="block lg:flex">
                                {HOW_IT_WORKS.map((item, index) =>
                                    <div className="flex-1" key={item.key}>
                                        <div className="max-w-xs mx-auto">
                                            <div className="mb-2">
                                                <Image src={item.image} alt={item.title} />
                                            </div>
                                            <div>
                                                <h3 className="text-3xl mb-2 text-primary">
                                                    {item.title}
                                                </h3>
                                            </div>
                                            <div>
                                                <p>
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>

                        <div className="container max-w-7xl px-5 py-6 lg:py-32">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-2">
                                You&apos;ll love <span className="text-primary">autoave</span>
                            </h2>
                            <div className="flex flex-wrap justify-center md:justify-between items-center mb-16">
                                {WHY_US.map((item, index) => {
                                    return (
                                        <div 
                                            className={`md:flex-1 p-3 max-w-xs`} 
                                            key={item.key} 
                                        >
                                            <div className="mb-4 relative pt-56">
                                                <Image src={item.image} layout="fill" objectFit="contain" alt={item.title} priority />
                                            </div>
                                            <div>
                                                <h5 className="text-2xl mb-2">
                                                    {item.title} 
                                                </h5>
                                                <p className="">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="text-center">
                                <div className="btn bg-primary text-white inline-block py-3 px-7 rounded cursor-pointer">
                                    Get your free quotation now!
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <LandingContactUs /> */}
                </div>
                <LandingFooter />
            </div>

        </>
    )
}