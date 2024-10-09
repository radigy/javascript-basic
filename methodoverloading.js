function print() {
    console.log("Hi")
}

function print(name) {
    console.log("Hi" + name)

}

function print(name, age) {
    console.log(" Hi " + name + " age " + age)

}

//calling 
print('naven', 20)

// browserName, browserVersion, remoteExecution

function displayBrowserInfo(browserName, browserVersion, remoteExecution) {
    if(typeof browserVersion === 'number' && typeof remoteExecution === 'boolean') {
        console.log(`browser: ${browserName}, version: ${browserVersion}, remoteExe: ${remoteExecution}`)
    }
    else if(typeof browserVersion==='number') {
        console.log(`browser: ${browserName}, version: ${browserVersion}`)
    }
    else {
        console.log(`browser: ${browserName}`)

    }
}

displayBrowserInfo('chrome')
