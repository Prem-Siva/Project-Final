import { GdprInputWrapper} from "../styled/Wrappers"

interface IGdprProps {
    changeGdprStatus(): void
}
export const Gdpr = (props:IGdprProps) => {

    const handleChange = () => {
        
        props.changeGdprStatus();
    }
    return (
        <>
           
            {/* <GdprInputWrapper >
                <label htmlFor="gdpr">Jag godkänner</label>
                <input onChange={handleChange} type="checkbox" id="gdpr"/>
            </GdprInputWrapper> */}
        </>
    )

}