import {searchModalProps} from "@/components/modals/search-modal/type";
import OutsideClickHandler from 'react-outside-click-handler';

const SearchModal = (props: searchModalProps) => {
  const {title, setSearchModalShow} = props
  return(
    <div className='position w-screen h-screen bg-black z-50 top-0 left-0'>
      <OutsideClickHandler
        onOutsideClick={() => {
          setSearchModalShow(false)
        }}
      >
        <div>
          <h2>{title}</h2>
        </div>

      </OutsideClickHandler>
    </div>
  );
}

export default SearchModal
