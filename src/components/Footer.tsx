import tw from 'twin.macro'

const footer: React.FC = () => {
  return (
    <footer tw="border-gray-900 w-full h-72 border-solid border-t-2 mt-10  pt-6 bg-black px-6">
      <div tw="container flex flex-col items-center mx-auto">
        <div tw="w-20 h-12">
          <img src="/logo.png" alt="" tw="w-20" />
        </div>
        <ul tw="flex justify-center space-x-8 mt-8 text-gray-500">
          <li>gmail</li>
          <li>rss</li>
          <li>github</li>
        </ul>
        <div tw="w-44">
          <ul tw="flex flex-wrap space-x-4 mt-12 text-gray-500">
            <li>联系我们</li>
            <li>关于</li>
            <li>开源声明</li>
            <li>API</li>
            <li>Console</li>
            <li>版本</li>
          </ul>
        </div>
        <div tw="flex justify-between w-full mt-6 text-gray-500 text-sm">
          <div tw="">&copy;2021 | Love Film</div>
          <div tw="">苏ICP备 19072422号-2</div>
        </div>
      </div>
    </footer>
  )
}

export default footer
