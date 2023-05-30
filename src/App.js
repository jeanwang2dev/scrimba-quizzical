import Button from './components/Button'

const App = () => {
    return (
        <main className="max-w-5xl mx-auto text-center py-52">
            <h1 className="font-karla font-bold text-3xl mb-2">Quizzical</h1>
            <p className="font-inter font-medium text-base mb-6">Some description if needed</p>
            <Button btn_text="Start quiz" />
        </main>
    )
}

export default App;