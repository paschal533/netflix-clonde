import { useContent } from "../hooks"
import SelectionFilter from "../utils/selection-map"
import { BrowseContainer } from "../container/browse";

export default function Browse() {
    const { series } = useContent('series');
    const { films } = useContent('films');
    const slides = SelectionFilter({ series, films});
    return (
        <BrowseContainer slides={slides} />
    )
}
