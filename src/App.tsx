import GeneratorSettings from "./components/generatorSettings/GeneratorSettings.tsx";
import React from "react";
import Password from "./components/password/Password.tsx";

const App: React.FC = () => {

    return <div className={'w-2/5 m-auto py-6 flex gap-4 items-center flex-col'}>
        <Password />
        <GeneratorSettings/>
    </div>
}

export default App
