import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./SearchInput.module.css"

export const SearchInput = () => {
  const [value, setValue] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate(`/search/${value}`)
  }

  const handleSearcher = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <form className={styles.searcher} onSubmit={handleSubmit}>
      <select>
        <option value="">Category1</option>
        <option value="react">Category2</option>
      </select>
      <input value={value} onChange={handleSearcher} type="text" name="searcher" />
      <input type="button" value="Search"/>
    </form>
  )
}
