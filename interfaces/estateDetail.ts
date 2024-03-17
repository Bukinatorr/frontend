import {Agent} from "@interfaces/agent";
import {Subway} from "@interfaces/subway";
import {Danji} from "@interfaces/danji";
import {Distribution} from "@interfaces/neighborhoods/distribution";
import {Amenity} from "@interfaces/neighborhoods/amenity";
import {Nearby_poi} from "@interfaces/neighborhoods/nearby_poi";

export interface EstateDetail {
    agent: Agent,
    subways: Array<Subway>,
    danji: Danji,
    item: {
        id: number,
        sales_type: string,
        service_type: string,
        images: Array<String>,
        image_thumbnail: string,
        price: {
            deposit: number,
            rent: number
        },
        area: {
            dedicate_area: number,
            contract_area: number
        },
        room_type: string,
        title: string,
        description: string,
        status: string,
        random_location: {
            lat: number,
            lng: number
        },
        parking_available_text: string,
        parking_count_text: string,
        elevator: boolean,
        room_direction: string,
        direction_criterion: string,
        movein_date: string,
        pnu: string,
        floor: {
            all_floors: string,
            floor: string
        },
        building_id: number,
        options: Array<String>,
        manage_cost: {
            amount: number,
            includes: Array<String>,
            not_includes: Array<String>
        },
        is_premium: boolean,
        is_homepage: boolean,
        has_user_penalty: boolean,
        room_gubun_code: string,
        view_count: number,
        updated_at: string,
        approve_date: string,
        bathroom_count: string,
        residence_type: string,
        neighborhoods: {
            distributions: Array<Distribution>,
            amenities: Array<Amenity>,
            nearby_pois: Array<Nearby_poi>
        },
        jibun_address: string,
        item_bm_type: string
    }
}
