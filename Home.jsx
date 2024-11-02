import React from 'react'

const Card = ({image}) => {
    return (
        <div className='w-[200px] h-[50vh] overflow-hidden flex items-center'>
                <img src={image} alt="img" className='w-full object-cover rounded-lg'/>
        </div>
    )
}

const Card2 = ({heading, text}) => {
    return(
        <div className='w-[20vw] h-[90%] bg-gradient-to-b from-[#192144] to-[#210E17] rounded-2xl p-[20px] flex flex-col gap-3'>
            <h2 className='text-white text-2xl font-semibold'>{heading}</h2>
            <p className='text-zinc-400'>{text}</p>
        </div>
    )
}

function Home() {

    const cardData = [
        "https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABRI6G-YI41kxtUQ_Q7Zbv2hDMmaE6UO55X8-4MeSYoCmguFroUSLc6D3e2LpBqDv0xvH8vMC_uBJW1yNZH2PiNJhVGWcBKcgGVcsyZpP_oeVvbdBYD4LYMD52UrTWWdW6ibdJ_d9x5s5T9CZF76OrfKCCXHjUHkauask_ikoPuKd9E30OiIxNnvutvKd_FxT9YLe9Rd1lJceznPKoB0vBtZ1iI0UfRme4Stq9DuRIyr3Jx-YVbaWjDxvPjr90ihIfKXKoOxGNOFHQOv9JumyvyJAWdKvs4tNlqj7RABPczxWHAjg_WtVvyEmY7mmb2QKDaIHnebpl1NDHttdN1xsAoQ.webp?r=4e6",

        "https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABekOyOEc0IMYCBzL1U12H-gMP39eTC0zZ0CawiEZfsVVEVfuzAXMWo1_7HVifGiVAezM9MLKJ-zMYF5vU2NZj1GAFKpJhPsJ9wD8412kiexuLATsJwlbCipYevBS8u1H_C0GtTn9c_dBQCtGd1H7CsnPPEeeLBX_VOpjX3-MufmSG3wQycmQXMFQVYJT4Pz8SM98uF8rVn1JhdfcmuopEFfxoojgtxEMvhFWitJ_62GUbqydRNfqfpurMuRLitUusP3nmdQGJ0G_I8ryAjgF4Ur7F2WKNrSALVuW3SarpyVl0Q4rv9U2IwglhY0wk_AGVwhJMiC1SNYaoofog4iInvE.webp?r=6b0",

        "https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABeNW_c9U9xz-Et1ZyU6zq1A1X3Dpuw90kY4WTTX0QqT4Rob8rlDd4Mf17LnqNX6gM74q5aFjQYrm6Qh_Q_EKy8nIXrmKqcPcmdg0zLxXZgSdtu2nUMRa6PxDDGR8M7oGuD3ujQNmDWC9aCnW3THvp4e-LQv46PNAEJwsV1pFD7CQAoFEHu_eOUHvgH2XQxsXjb4QU-pjKFKRs7nRS5N7eFOL9Slo2nWZqW5fB6jvhFJq7PPEu_qMYmS4EkjitCOpa5E8GmbfZwv4jbRGahoc1J4QLX8UuG2CzftTm8Fxw-VmMxsx-MPTM23iLhefxi2FaaLNT-JAAjzYeeEh6eS2l7I.webp?r=7a3",

        "https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABYtQQuyzfpH21gbzUiC47JPBO9fctekBa91MAuaqBkJX2hq5AgldT2woVYvCfeJXURRTmZRK-nEXI2W4yyEDtLTe4fzrzyXx_kNLFCoxHcjNTWIfW-VktlZZl6wGsbL4EYFYmg2-H93j4GnJLAFUvRUfEDB3a3dAHDCvEgqkIMDRBzwI4Ggp3PQvNd-7XSbl5e8NoOY0OWJ7UFGMEnLrUlUj1r5EPNjTkk52iU3SMPdnCFX7WjFsujHobj_ljq6YIqSFOgZtCuiaXx4gTwqZm4hSGkHCbQWe7rg2WfMFjr15ua7ZpEPSTCJovK-zYgxX3hwvapFTIv4p1YCnWWtV66M9vXD1uwhDm5anxVn412cjsn2Quc8.webp?r=21e",

        "https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABR5Z7e_9t-H9tixK6B-woYyqWzOxwTX-lxY60E81x8aCI6QTsyphquWS1JqGq6oWmh-kUkoyzAOWAdCDH5cuw-ne8hXKBLXaszbBZ3lWye1Di_2eVZavdpxmkx72efjHQ95Li_tX8y5BTbTvUcMPy3Hft_uWVU6RFw3d13wFOwjqU2NtEIHPT87HADBiZkc.webp?r=cb7",

        "https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABfLk0yD03_b7ZgzvbX98-s5mqI5dzBYCZ73Y2pfyB3K6Lj2f5XQXMzhSTCtZNTYM_893Fb6beyPZ7bZ3rXvmTsQkr8gMhm8MEM6Oo7YQO-mRNxJMNd30Tl11enxphJTOidORqLy0mtQItmCgqyaDzh6-EYzzxl4ibOKEWL_pi3VXaWuSL70xvKVp-Tl2S94MyYT7AsNqbMt5XnXsQJm_HFh5-C3DDPLKXFor5a0Ru_MW6AD5G7spOHTYPFwXW2GjkyIRfH_c9Eos8dzzLtMfm7wnvien.webp?r=25e",

        "https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABROw7UcegJWdZAcvz8jSHY0LkGnpYlbPe5KKmmRuMRWcGS24oLqHEdtwi8-NaInwZfiFFeSS7YRkE7QJ8v9i1e4tAt9cy0CIow5BVOw2Z5Rhb-siz9CQsFB9W4M_6iWeGI27Ob9J-Who2uHlotE4nRR-7oWf7v4dSmahcfkJV18g7JEChdbyUoL17TzUKZHKk7Hx0EcQJhvm7E0GC1RvU6h5TduZ39Km9Qd2DfEliCMpqvligdaJcEcYt1lz16uexcU4zBhUmfauocCu3yf5BEFuVi5oyzdteB0TWsY1fGytJZZIJ57Q8Dv4.webp?r=0bd",

        "https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABdNm1_0JDssfeT9TOVT-1ScAKkMpvxJyu11uCbWr8ibBjcDsPxfmE-6x2uV0vqaxu4kD2XP0bfDnlIW-eEb85I05kn0CrL7qsy8.webp?r=30c",

        "https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABQQaAEyFlAZti5cHqUIjHQyDXKgJdWmhZYcFy3TGJxSpMW0mU3-zYLcZwdnMz34pwG77OpbIjovQIqlL2Ojj5Dz2PQks0-0R3Ceylcil-b5X1j4wFVyHzCXbWmJmBPDtiUV8q6cNXbdTtaB1EWmS8utsPwhWLBUP_4tz7pjsM_vtrJegWydkcqaTpYN1h8MV4kR2UygB4dXlPBv0hBS8Lp2jHnVuMSBg1nJD1_p-4-m9JGhWTIcl9IGhI1f5EIV8d_zV8TRysIMJ7Hl7w6Ouy7YIdck8.webp?r=d7f",

        "https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABUN8dnh6g-eUm5tUComRgtWHPXPiY7kvZ8cBMsz1gHLtNNGKrJX1ySjaFvBq5cvO0EoVjM4mJHN-Vw-yEJKLHHrEiw5y_RkwcWFFvD1H7Q0ITAxZIp35ijpyYGdg2CYllR6VJvpxtX9r9dkEfLhoMbk7qIyPrl5kKuOQU40bzVyMU9gtkariUG-aYjPRNTqp4FRFwHaQS3tBO0yAhFOm7UdUzcFZiCkYzdq0RmDFCGXiVZjIYEjqb2OejgI97WviM-m_b1ZzSVyBD6T1xSuBGGbILCMmwCvJZByn_4s28nVyCG5R4Rv3LBBz.webp?r=57a"
    ];

  return (
    <div className='w-full h-[125vh] bg-[#000000]'>
        <div className='w-full h-[40px] bg-gradient-to-r from-red-400 via-red-900 to-red-400 rounded-t-[8px]'></div>
        <div className='w-full h-full bg-[#000000] mt-[-35px] rounded-t-[14px] p-[40px]'>
            <div className='w-full h-[65vh] flex flex-col gap-4'>
                <h2 className='text-white text-2xl font-semibold'>Trending Now</h2>
                <div className='flex gap-8'>
                    <select name="dropbox2" id="dropbox2" className='w-[99px] h-[39px] bg-[transparent] text-white border-[1px] border-white-900 rounded-[5px]'>
                        <option value="India" className='text-black'>India</option>
                        <option value="Global" className='text-black'>Global</option>
                    </select>
                    <select name="dropbox3" id="dropbox3" className='w-[99px] h-[39px] bg-[transparent] text-white border-[1px] border-white-900 rounded-[5px]'>
                        <option value="Movies" className='text-black'>Movies</option>
                        <option value="TV Shows" className='text-black'>TV Shows</option>
                    </select>
                </div>
                <div className='w-full h-[60vh] flex items-center gap-10 overflow-x-scroll overflow-y-hidden p-[20px]'>
                    {cardData.map((card, index) => (
                        <div key={index} className='flex-none'>
                            <Card image={card}/>
                        </div>
                    ))}
                </div>
            </div>   
            <div className='w-full h-[54vh] flex flex-col justify-center gap-3'>
                <h2 className='text-white text-2xl font-semibold'>More reaons to join</h2>
                <div className='w-full h-[45vh] flex items-center justify-between'>
                    <Card2
                    heading={"Enjoy on your TV"}
                    text={"Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."}/>
                    <Card2
                    heading={"Download your shows to watch offline"}
                    text={"Save your favourites easily and always have something to watch."}/>
                    <Card2
                    heading={"Watch everywhere"}
                    text={"Stream unlimited movies and TV shows on your phone, tablet, laptop and TV."}/>
                    <Card2
                    heading={"Create profile for kids"}
                    text={"Send kids on adventures with their favourite characters in a space made just for them — free with your membership."}/>
                </div>
            </div>  
        </div>
    </div>
  )
}

export default Home