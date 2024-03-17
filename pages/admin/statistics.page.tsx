// import type { NextPage } from 'next';
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend,
// } from 'chart.js';
// import Main from '@layout';
// import { Line } from 'react-chartjs-2';
// import {useQuery} from "react-query";
// import {Estate} from "@interfaces/estate";
// import {useSearchLocations} from "@api/estates";
// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend
// );
//
//
// const BITS = [16, 8, 4, 2, 1];
// const BASE32 = "0123456789bcdefghjkmnpqrstuvwxyz";
// const encodeGeoHash = (latitude: number, longitude: number, precision: number) => {
//     let is_even: boolean = true;
//     let i= 0;
//     let lat = []; let lon = [];
//     let bit= 0;
//     let ch= 0;
//     let geohash = "";
//
//     lat[0] = -90.0;  lat[1] = 90.0;
//     lon[0] = -180.0; lon[1] = 180.0;
//
//     let mid;
//     while (geohash.length < precision) {
//         if (is_even) {
//             mid = (lon[0] + lon[1]) / 2;
//             if (longitude > mid) {
//                 ch |= BITS[bit];
//                 lon[0] = mid;
//             } else
//                 lon[1] = mid;
//         } else {
//             mid = (lat[0] + lat[1]) / 2;
//             if (latitude > mid) {
//                 ch |= BITS[bit];
//                 lat[0] = mid;
//             } else
//                 lat[1] = mid;
//         }
//
//         is_even = !is_even;
//         if (bit < 4)
//             bit++;
//         else {
//             geohash += BASE32[ch];
//             bit = 0;
//             ch = 0;
//         }
//     }
//     return geohash;
// }
//
//
// const AdminStatisticsPage: NextPage = () => {
//     const {
//         data: locations,
//         isLoading,
//         isSuccess
//     } = useQuery('locations', useSearchLocations("강남구", "원룸"));
//
//     console.log(locations)
//     if(isLoading) return '로딩중';
//     // if(isSuccess) { const labels = nullValueStatistics[2] };
//
//     return (
//         <div>
//         </div>
//         // (nullValueStatistics) &&
//         // <Main>
//         //     <Line
//         //         options={{
//         //             responsive: true,
//         //             plugins: {
//         //                 legend: {
//         //                     position: 'top' as const,
//         //                 },
//         //                 title: {
//         //                     display: true,
//         //                     text: `${nullValueStatistics[0]} 매물 데이터 ${nullValueStatistics[1]}개`,
//         //                 },
//         //             },
//         //         }}
//         //         data={{
//         //             labels,
//         //             datasets: [
//         //                 {
//         //                     label: 'Null Value Count',
//         //                     data: nullValueStatistics[3],
//         //                     borderColor: 'rgb(255, 99, 132)',
//         //                     backgroundColor: 'rgba(255, 99, 132, 0.5)',
//         //                 },
//         //                 {
//         //                     label: 'Not Null Value Count',
//         //                     data: nullValueStatistics[4],
//         //                     borderColor: 'rgb(53, 162, 235)',
//         //                     backgroundColor: 'rgba(53, 162, 235, 0.5)',
//         //                 },
//         //             ],
//         //         }}
//         //     />
//         // </Main>
//     );
// };
//
// export default AdminStatisticsPage;
//
