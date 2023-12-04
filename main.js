const {app, BrowserWindow, globalShortcut} = require('electron');


const createWindow = (file) => {
    const window = new BrowserWindow( {
        width: 1820,
        height: 980, 
        resizable: false
    });

    globalShortcut.register('f5', ()=>{
        console.log('f5 is presed');
        window.reload();
    });

    globalShortcut.register('CommandOrControl+R', ()=>{
        console.log("Output was: \n", output);
        console.log("Control+R was pressed");

        window.reload();
    });

    window.loadFile(file);
    window.setMenu(null);
}


app.whenReady().then( ()=>{
    createWindow("./dist/index.html");
})