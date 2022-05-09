export default function FundoMobile() {
    const icons = ['home', 'search-outline', "add-circle-outline", "heart-outline", "person-outline"];
    return (
        <div class="fundo-mobile">
            {icons.map(ionName => <ion-icon name={ionName}></ion-icon>)}
        </div>
    )
}