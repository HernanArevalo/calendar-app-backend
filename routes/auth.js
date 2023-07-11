

app.get('/',(req, res) => {

        console.log('se requiere slash');
        res.json({
            ok: true
        })
    }
);
