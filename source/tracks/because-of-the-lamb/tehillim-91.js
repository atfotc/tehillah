import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const Tehillim91 = props => (
    <Track
        cues={[
            "00:00",
            "00:18",
            "00:33",
            "00:50",
            "01:06",
            "01:24",
            "01:41",
            "01:57",
            "02:14",
            "02:30",
        ]}
        music="because_of_the_lamb_tehillim_91"
        {...props}
    >
        <Title>
            <Labels.BecauseOfTheLamb.Tehillim91 />
        </Title>
        <Verse repeat>
            <Line>He who dwells in the secret place</Line>
            <Line>of the Most High</Line>
        </Verse>
        <Verse repeat>
            <Line>
                He is saying of <Yahweh />
            </Line>
            <Line>my refuge and my stronghold</Line>
            <Line>my Elohim in whom I trust</Line>
        </Verse>
        <Verse repeat>
            <Line>A thousand fall at your side</Line>
            <Line>ten thousands at your right hand</Line>
        </Verse>
        <Verse repeat>
            <Line>But it does not come near you</Line>
            <Line>it does not come near you</Line>
            <Line>Only with your eyes you look on</Line>
        </Verse>
        <Verse repeat name="one">
            <Line>
                I am saying of <Yahweh />
            </Line>
            <Line>my refuge and my stronghold</Line>
            <Line>my Elohim in whom I trust</Line>
        </Verse>
        <Verse repeat name="two">
            <Line>When I call on You, You just answer me</Line>
            <Line>When I’m in distress You deliver me</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse repeat repeatText="x4">
            <Line>
                I am saying of <Yahweh />
            </Line>
            <Line>my refuge and my stronghold</Line>
            <Line>my Elohim in whom I trust</Line>
        </Verse>
    </Track>
)

export { Tehillim91 }
