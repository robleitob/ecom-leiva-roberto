const ItemListContainer = (props) => {
    const stypeDiv = {
        border: '1px solid blue',
        padding: '20px'
    }
    const styles = {
        header: 'text-3xl font-black underline'
    }
    return (
        <div style={stypeDiv}>
            {props.greeting}
            <p className={styles.header}>Proximamente !!!!</p>
        </div>
    )
}
export default ItemListContainer