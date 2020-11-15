import 'twin.macro';

export const Select = () => {
  return (
    <select tw="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-indigo-500 pl-3 pr-10">
      <option>SM</option>
      <option>M</option>
      <option>L</option>
      <option>XL</option>
    </select>
  )
}
