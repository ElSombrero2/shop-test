import Image from 'next/image'
import styles from './basic-card.module.css'

export const BasicCard = (): JSX.Element => {
    return (
        <>
            <div className={styles.card}>
                <div style={{width: '300px', display: "flex", justifyContent: 'center', alignItems: 'center', height: '300px', background: '#eee', borderRadius: '10px'}}>
                    <Image width="250" height="250" src="/casque.png" alt="img" />
                    <button style={{position: 'absolute', marginBottom: '225px', marginLeft: '225px'}}>
                        Ok
                    </button>
                </div>
                <div className={styles.description}>
                    <div>
                        <strong>Wireless Machin Machin, <span>XXLSM</span></strong>
                    </div>
                    <div>
                        <small style={{fontWeight: 600, color: '#888'}}>
                            Organic Cotton, fairtrade certified
                        </small>
                    </div>
                    <div>
                        <small style={{color: '#229933'}}>
                            Etoiles (121)
                        </small>
                    </div>
                    <div style={{marginTop: '20px'}}>
                        <button className={styles.button}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}