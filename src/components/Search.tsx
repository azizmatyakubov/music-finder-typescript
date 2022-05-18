import { InputGroup, FormControl, Button } from 'react-bootstrap'

interface searchProps {
    setSearch: any,
    searchMusic: any
}

const Search = ({setSearch, searchMusic}:searchProps) => {
  return (
    <InputGroup className="mb-3">
    <FormControl
      placeholder="Search for a song"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      className='mr-4'
      onChange={(e:any) => setSearch(e.target.value)}
    />
    <Button variant="outline-secondary" id="button-addon2" onClick={searchMusic}>
        Search
    </Button>
  </InputGroup>
  )
}

export default Search