import React from 'react';
import { Container, Header, Icon, List, Image, Divider } from 'semantic-ui-react';

function ItemDetailCard({ item }) {
    let itemDetailMarkup = (<p>Loading item..</p>)
    if (item) {
        itemDetailMarkup = (
            <Container>
                <Header as='h2'>{item.name}</Header>
                <List horizontal>
                    <List.Item>Terjual 10</List.Item>
                    <List.Item>
                    <Icon name='star' style={{ color: 'gold' }}/>
                    {" 5 (44 Ulasan)"}
                    </List.Item>
                </List>
                <Header as='h1'>Rp{item.price}</Header>
                <Container>
                    <List>
                    <List.Item>Kondisi: Baru</List.Item>
                    <List.Item>Berat: 150 Gram</List.Item>
                    <List.Item>Kategori: Soft Case Handphone</List.Item>
                    <List.Item>Etalase: Semua Etalase</List.Item>
                    </List>
                </Container>
                <Container>
                    <p>
                    Case Samsung Galaxy M51 Soft Case Transparent Matte Case Anti Knock dengan bahan yang bagus .
                    <br/>
                    <br/>
                    Warna : List Hitam .
                    <br/>
                    List Biru .
                    <br/>
                    List Hijau .
                    <br/>
                    List Merah .
                    </p>
                </Container>
                <Divider />
                <Container>
                    <List horizontal>
                    <List.Item>
                        <Image
                        src='https://react.semantic-ui.com/images/wireframe/image-text.png'
                        as='a'
                        size='mini'
                        href='http://google.com'
                        target='_blank'/>
                    </List.Item>
                    <List.Item>
                        <Header as='h2'>{item.user.seller.username}</Header>
                    </List.Item>
                    <List.Item>
                        <Icon name='star' style={{ color: 'gold' }}/>
                        {" 4.8 rating toko"}
                    </List.Item>
                    </List>
                </Container>
                <Divider />
            </Container>
        )
    }
    return itemDetailMarkup
}
export default ItemDetailCard