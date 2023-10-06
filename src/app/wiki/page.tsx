const App = () => {
  const generateContent = () => {
    // Generate content dynamically (example)
    const headings = ['Heading 1', 'Heading 2', 'Heading 3']
    const paragraphs = [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed egestas egestas fringilla phasellus. A pellentesque sit amet porttitor. Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Semper eget duis at tellus at urna condimentum. Rhoncus aenean vel elit scelerisque. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Ac orci phasellus egestas tellus. Elit duis tristique sollicitudin nibh sit amet commodo. Eros donec ac odio tempor. Sodales ut etiam sit amet nisl. Urna porttitor rhoncus dolor purus non. Netus et malesuada fames ac turpis egestas maecenas. Mauris nunc congue nisi vitae. In massa tempor nec feugiat nisl pretium fusce. Dui id ornare arcu odio ut sem nulla pharetra. Eget nunc lobortis mattis aliquam faucibus purus. Feugiat in ante metus dictum at. Ac feugiat sed lectus vestibulum mattis.',
      'Nunc sed velit dignissim sodales ut eu sem. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed. Viverra maecenas accumsan lacus vel. Donec ac odio tempor orci dapibus ultrices. Mauris a diam maecenas sed. Rhoncus aenean vel elit scelerisque mauris pellentesque. Consectetur adipiscing elit ut aliquam purus sit amet luctus. Nisi est sit amet facilisis magna etiam. Eu consequat ac felis donec. Pharetra sit amet aliquam id diam maecenas ultricies mi. Blandit turpis cursus in hac habitasse platea dictumst. Diam maecenas ultricies mi eget mauris pharetra et ultrices. Sit amet risus nullam eget felis eget nunc lobortis mattis. Neque sodales ut etiam sit amet nisl purus in. Senectus et netus et malesuada fames ac turpis. Duis at consectetur lorem donec massa sapien faucibus et.',
      'Eget aliquet nibh praesent tristique magna. Orci eu lobortis elementum nibh tellus molestie. Lectus magna fringilla urna porttitor rhoncus. Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Sed risus pretium quam vulputate dignissim suspendisse in est. Sit amet purus gravida quis blandit turpis cursus in. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Purus non enim praesent elementum facilisis leo vel fringilla. Iaculis eu non diam phasellus vestibulum. Ut tristique et egestas quis ipsum. Cursus risus at ultrices mi tempus imperdiet nulla malesuada. Cursus euismod quis viverra nibh cras. Odio morbi quis commodo odio aenean sed. Velit egestas dui id ornare arcu odio. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Sit amet porttitor eget dolor morbi non arcu.'
    ]

    return headings.map((heading, index) => (
      <div key={index} className="mb-4">
        <h2 className="text-xl font-semibold">{heading}</h2>
        <p className="mt-2">{paragraphs[index]}</p>
      </div>
    ))
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-600">
      <header className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            WikiTensor
          </a>
        </div>
        <div className="flex space-x-4">
          <a href="/" className="text-gray-600 hover:text-gray-900">
            Home
          </a>
          <a href="/" className="text-gray-600 hover:text-gray-900">
            Random Article
          </a>
        </div>
      </header>
      <div className="flex bg-white dark:bg-gray-700">
        {/* Sidebar */}
        <aside className="w-1/4 p-4 bg-gray-100 dark:bg-gray-700">
          <div className="sticky top-0">
            <h2 className="mb-4 text-lg font-bold">Table of Contents</h2>
            <ul className="space-y-2">
              <li>
                <a href="#section1" className="dark:text-gray-300 hover:text-gray-500 hover:dark:text-gray-200">
                  Section 1
                </a>
              </li>
              <li>
                <a href="#section2" className="dark:text-gray-300 hover:text-gray-500 hover:dark:text-gray-200">
                  Section 2
                </a>
              </li>
              <li>
                <a href="#section3" className="dark:text-gray-300 hover:text-gray-500 hover:dark:text-gray-200">
                  Section 3
                </a>
              </li>
            </ul>
          </div>
        </aside>

        {/* Content */}
        <main className="flex-grow p-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="mb-4 text-3xl font-bold text-left">AI Generated Content</h1>

            <div id="section1">{generateContent()}</div>
            <div id="section2">{generateContent()}</div>
            <div id="section3">{generateContent()}</div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
