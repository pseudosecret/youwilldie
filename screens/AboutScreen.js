import React from 'react'
import { View, Text, ImageBackground, Button, StyleSheet, ScrollView, Linking, TouchableHighlight } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const AboutScreen = props => {
    return (
        <View style={styles.screen}>
            <ScrollView>
                <LinearGradient colors={['#330300', '#240300', '#030000']} style={styles.gradient}>
                    <View style={styles.titleArea}>
                        <Text style={styles.title}>About this Project</Text>
                    </View>
                    <View>
                        <Text style={styles.body}>Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit​​, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror.</Text>
                    </View>
                    <View>
                        <Text style={styles.body}>Cum horribilem resurgere de sepulcris creaturis, sicut de iride et serpens. Pestilentia, ipsa screams. Pestilentia est haec ambulabat mortuos. Sicut malus voodoo. Aenean a dolor vulnerum aperire accedunt, mortui iam vivam. Qui tardius moveri, sed in magna copia sint terribiles legionis. Alii missing oculis aliorum sicut serpere crabs nostram. Putridi odores aere implent.</Text>
                    </View>
                    <View style={styles.titleArea}>
                        <Text style={styles.title}>Was this a good idea?</Text>
                    </View>
                    <View>
                        <Text style={styles.body}>In omni memoria patriae religionis sunt diri undead historiarum. Golums, zombies et fascinati. Maleficia! Vel a modern perhsaps morbi. A terrenti contagium. Forsitan illud Apocalypsi, vel malum poenae horrifying fecimus. Indeflexus monstra per plateas currere. Fit de nostra carne undead. Poenitentiam agite pœnitentiam! Vivens mortua sunt apud nos.</Text>
                    </View>
                    <View>
                        <Text style={styles.body}>Tremor est vivos magna. Expansis ulnis video missing carnem armis caeruleum in locis. A morbo amarus in auras. Nihil horum sagittis tincidunt, gelida portenta. The unleashed virus est, et iam mortui ambulabunt super terram. Souless mortuum oculos attonitos back zombies. An hoc incipere Clairvius Narcisse, an ante? Is bello mundi z?</Text>
                    </View>
                    <View>
                        <Text style={styles.body}>Zombie ipsum brains reversus ab cerebellum viral inferno, brein nam rick mend grimes malum cerveau cerebro. De carne cerebro lumbering animata cervello corpora quaeritis. Summus thalamus brains sit​​, morbo basal ganglia vel maleficia? De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris. Hi brains mindless mortuis limbic cortex soulless creaturas optic nerve, imo evil braaiinns stalking monstra hypothalamus adventus resi hippocampus dentevil vultus brain comedat cerebella pitiutary gland viventium. Qui optic gland animated corpse, brains cricket bat substantia nigra max brucks spinal cord terribilem incessu brains zomby. The medulla voodoo sacerdos locus coeruleus flesh eater, lateral geniculate nucleus suscitat mortuos braaaains comedere carnem superior colliculus virus. Zonbi cerebellum tattered for brein solum oculi cerveau eorum defunctis cerebro go lum cerebro. Nescio brains an Undead cervello zombies. Sicut thalamus malus putrid brains voodoo horror. Nigh basal ganglia tofth eliv ingdead.</Text>
                    </View>
                    <View>
                        <Text style={styles.body}>Medulla lucio brains fulci tremor locus coeruleus est dark vivos lateral geniculate nucleus magna. Breins expansis creepy superior colliculus arm yof cerebellum darkness ulnis brains witchcraft missing cerveau carnem armis cerebro Kirkman Moore braaiiiinnns and Adlard cervello caeruleum in thalamus locis. Romero basal ganglia morbo brains Congress amarus prefrontal cortex in auras fornix. Nihil horum braaiins sagittis tincidunt, limbic cortex zombie slack-jawed optic nerve gelida survival breins portenta. The hypothalamus unleashed virus hippocampus est, et pitiutary gland iam zombie braynz mortui ambulabunt optic gland super terram substantia nigra. Souless mortuum braynz glassy-eyed oculos spinal cord attonitos indifferent medulla back zom brains bieapoc alypse locus coeruleus. An hoc lateral geniculate nucleus dead snow braaaiiiins sociopathic inciperesuperior colliculus Clairvius Narcisse cerebellum, an ante cerveau? Is bello brains mundi z?</Text>
                    </View>
                    <View>
                        <Text style={styles.body}>In Craven cerebro omni memoria cervello patriae zombieland breins clairvius narcisse thalamus religionis sunt sweet bread diri undead basal ganglia historiarum. Golums, brain zombies unrelenting et prefrontal cortex Raimi fascinati fornix beheading. Maleficia! Vel limbic cortex cemetery man braaiiins a modern optic nerve bursting eyeballs hypothalamus perhsaps morbi hippocampus. A terrenti Brains flesh contagium pitiutary gland. Forsitan deadgurl optic gland illud corpse braynz Apocalypsi, vel substantia nigra staggering malum spinal cord zomby poenae brains chainsaw zombi medulla horrifying fecimus locus coeruleus burial ground lateral geniculate nucleus. Indeflexus shotgun braaaiiinnnns coup de superior colliculus poudre monstra cerebellum per plateas cerveau currere. Fit brains de decay cerebro nostra carne cervello undead. Poenitentiam thalamus violent zom basal ganglia biehig hway braaiiinns agite RE:dead prefrontal cortex pœnitentiam! Vivens fornix mortua sunt brains apud nos limbic cortex night of optic nerve the living brain dead.</Text>
                    </View>
                    <View style={styles.emailSection}>
                        <Text style={styles.questionsForUsEmailText}>Questions for us?</Text>
                    </View>
                    <Button style={styles.emailButton}
                        title="Email Us"
                        onPress={() => Linking.openURL('mailto:smartchoices@youwilldie.rip')} />
                    <View flexDirection={'row'} style={styles.webLink}>
                        <Text style={styles.body}>Or visit us at: </Text>
                        <TouchableHighlight onPress={() => Linking.openURL('https://www.youwilldie.rip/')}>
                            <Text style={styles.urlToSite}>www.youwilldie.rip</Text>
                        </TouchableHighlight>
                    </View>
                </LinearGradient>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#121111',
    },
    gradient: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    titleArea: {
        alignItems: 'center'
    },
    title: {
        color: '#EFEFEF',
        fontFamily: 'gabriela',
        fontSize: 28,
        marginBottom: 5
    },
    body: {
        color: '#EFEFEF',
        fontFamily: 'alice',
        fontSize: 18,
        marginBottom: 10
    },
    emailSection: {
        alignItems: 'center',
        marginTop: 25
    },
    questionsForUsEmailText: {
        color: '#EFEFEF',
        fontFamily: 'alice',
        fontSize: 18,
        marginBottom: 10
    },
    webLink: {
        marginTop: 15
    },
    urlToSite: {
        color: 'blue',
        fontFamily: 'gabriela',
        fontSize: 18,
        textDecorationLine: 'underline'
    }
})

export default AboutScreen