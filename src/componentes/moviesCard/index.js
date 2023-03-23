import { TouchableOpacity, StyleSheet, Image } from "react-native"


export const Moviescard = (props) => {
    return (
        <TouchableOpacity>
            <Image style={styles.img} source={props.movieURL} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create ({
    img: {
        marginRight: 20,
    }
})