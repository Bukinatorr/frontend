const BITS = [16, 8, 4, 2, 1];
const BASE32 = "0123456789bcdefghjkmnpqrstuvwxyz";

export const encodeGeoHash = (latitude: number, longitude: number, precision: number) => {
    let is_even: boolean = true;
    let i= 0;
    let lat = []; let lon = [];
    let bit= 0;
    let ch= 0;
    let geohash = "";

    lat[0] = -90.0;  lat[1] = 90.0;
    lon[0] = -180.0; lon[1] = 180.0;

    let mid;
    while (geohash.length < precision) {
        if (is_even) {
            mid = (lon[0] + lon[1]) / 2;
            if (longitude > mid) {
                ch |= BITS[bit];
                lon[0] = mid;
            } else
                lon[1] = mid;
        } else {
            mid = (lat[0] + lat[1]) / 2;
            if (latitude > mid) {
                ch |= BITS[bit];
                lat[0] = mid;
            } else
                lat[1] = mid;
        }

        is_even = !is_even;
        if (bit < 4)
            bit++;
        else {
            geohash += BASE32[ch];
            bit = 0;
            ch = 0;
        }
    }
    return geohash;
}
