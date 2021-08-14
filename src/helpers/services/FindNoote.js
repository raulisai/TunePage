import { noteBorders } from "../objects/noteBorders"

const FindNote = (e) => {
        if (254.285 >= e) {
            if (89.903 >= e) {
                for (var r = 0; 17 >= r; r++) if (e > noteBorders[r][0] && e <= noteBorders[r][1]) return r
            } else
            for ( r = 18; 35 >= r; r++) if (e > noteBorders[r][0] && e <= noteBorders[r][1]) return r
        } else if (719.225 >= e) {
            for ( r = 36; 53 >= r; r++) if (e > noteBorders[r][0] && e <= noteBorders[r][1]) return r
        } else
        for ( r = 54; 71 >= r; r++) if (e > noteBorders[r][0] && e <= noteBorders[r][1]) return r;
        return -1
    

}

export default FindNote ;


