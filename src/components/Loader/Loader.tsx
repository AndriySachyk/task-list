import { TailSpin } from 'react-loader-spinner'
import { BoxLoading } from './Loader-styled'
import { useTheme } from '../../Provider/ThemeProvider'


export const Loader = () => {

const {darkMode} = useTheme()


    return (
        <BoxLoading>
            <TailSpin
            height="75"
            width="75"
            color={darkMode? "#212121": "#cccccc"}
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            />
        </BoxLoading>
      )
}


