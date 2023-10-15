const surfForecast = [
	{
		name:"wind speed",
		description: "generally you want this as low as possible."
	},
	{
		name: "wind direction",
		description: "if theres some wind about, the direction can make a big difference. To be able to determine whether the wind will be beneficial, you need to know the direction of the beach. If the wind direction is the same direction of the beach, you have an offshore wind, whereas if the wind direction is in the opposite direction to the beach, you have an onshore wind. Generally both of these types of winds can have their benefits which I will explain later, but any other directions are not going to help you have good waves."
	},
	{
		name: "swell size",
		description: "The size of the waves far out at sea. These waves are still mostly under the water and not an indicator of the actual size of the swell when it reaches the beach, This size will depend on the swell direciton and the period"
	},
	{
		name: "swell direction",
		description: "This is the direction at which the waves are ariving ath the beach. If this is not completely in line with the direction of the beach, the waves will lose some energy as they 'wrap around' the corner. The inside of this corner will be slightly sheltered causing the waves to be smaller, whereas the side of the beach that is still able to see the oncoming waves without the headland blocking it will see waves similar to the swell size. providing the period is of siginificant time."
	},
	{
		name: "period",
		description: "this is the time between the waves. So if you were to count the time after the peak of the wave has passed you, the period would be the number of seconds before the peak of the second waves takes to reach you."
	},
]
export default surfForecast;
