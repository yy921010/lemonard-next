const footer: React.FC = () => {
  return (
    <footer className="border-gray-900 w-full h-72 border-solid border-t-2 mt-10  pt-6 bg-gray-800 px-6">
      <div className="container flex flex-col items-center mx-auto">
        <div className="w-20 h-12">
          <img src="/logo.png" alt="" className="w-18" />
        </div>
        <ul className="flex justify-center space-x-8 mt-8">
          <li>gmail</li>
          <li>rss</li>
          <li>github</li>
        </ul>
        <div className="w-42">
          <ul className="flex flex-wrap space-x-4 mt-12 text-gray-500">
            <li>联系我们</li>
            <li>关于</li>
            <li>开源声明</li>
            <li>API</li>
            <li>Console</li>
            <li>版本</li>
          </ul>
        </div>
        <div className="flex justify-between w-full mt-6 text-gray-500 text-sm">
          <div className="">&copy;2021 | Love Film</div>
          <div className="">苏ICP备 19072422号-2</div>
        </div>
      </div>
    </footer>
  )
}

export default footer
