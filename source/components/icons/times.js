import React from "react"
import PropTypes from "prop-types"
import Svg, { Path } from "react-native-svg"

const Times = ({ fill, width, height }) => (
    <Svg viewBox="0 0 320 512" width={width} height={height}>
        <Path
            fill={fill}
            d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"
        />
    </Svg>
)

Times.propTypes = {
    fill: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
}

Times.defaultProps = {
    fill: "#000",
    width: 48,
    height: 48,
}

export { Times }